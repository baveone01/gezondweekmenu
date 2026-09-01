// Boodschappenlijst-generator: kies recepten, pas de porties aan en genereer
// automatisch een gesorteerde boodschappenlijst per categorie.
import { useMemo, useState } from 'react';
import { recipes } from '../data/recipes';
import type { RecipeMeta } from '../data/types';

interface Sel {
  multiplier: number; // t.o.v. het aantal porties van het recept
}

// Dutch food group classifier via keyword matching (tiered: specific first)
const GROEPEN: { name: string; keywords: string[] }[] = [
  { name: 'Vlees & vis', keywords: ['kipfilet', 'kip', 'zalm', 'rundergehakt', 'gehakt', 'vlees', 'vis', 'spek', 'tonijn'] },
  { name: 'Zuivel & plantaardig', keywords: ['griekse yoghurt', 'yoghurt', 'plantaardige melk', 'melk', 'feta', 'parmezaan', 'kaas', 'eieren', 'ei', 'crème fraîche', 'crème', 'room', 'boter', 'kwark', 'mozzarella', 'griekse'] },
  { name: 'Groenten & fruit', keywords: ['courgette', 'sperziebonen', 'broccoli', 'wortel', 'spinazie', 'avocado', 'komkommer', 'tomaten', 'tomaat', 'rucola', 'bleekselderij', 'ui', 'knoflook', 'gember', 'blauwe bessen', 'banaan', 'citroen', 'champignon', 'prei', 'andijvie', 'paprika', 'lente-ui', 'munt', 'basilicum', 'chilivlokken', 'chili', 'groente', 'sla', 'citroenpartjes'] },
  { name: 'Noten & zaden', keywords: ['amandelmeel', 'amandelschaafsel', 'amandel', 'walnoot', 'pijnboompitten', 'chiazaad', 'noten', 'pitten', 'zonnebloempit', 'sesamzaad'] },
  { name: 'Pasta, rijst & granen', keywords: ['zilvervliesrijst', 'quinoa', 'havermout', 'pasta', 'spaghetti', 'couscous', 'bulgur', 'paneermeel', 'brood', 'volkorenbrood', 'volkorenspaghetti'] },
  { name: 'Blik & houdbaar', keywords: ['kokosmelk', 'tomatenblokjes', 'kikkererwten', 'tomatenspiritus', 'bouillonblokje', 'bouillon', 'olijfolie', 'honing', 'ahornsiroop', 'cacaopoeder', 'chocolade', 'vanille', 'azijn', 'appelmoes', 'blik', 'suiker'] },
  { name: 'Kruiden & specerijen', keywords: ['kerriepoeder', 'kerrie', 'garam masala', 'kurkuma', 'komijn', 'oregano', 'dille', 'kaneel', 'paprikapoeder', 'currypasta', 'peper', 'zout', 'kruiden', 'specerijen'] },
];

function categorize(name: string): string {
  const n = name.toLowerCase();
  for (const g of GROEPEN) {
    if (g.keywords.some((k) => n.includes(k))) return g.name;
  }
  return 'Overige';
}

// Scale leading quantity like "500 g" | "1 blik (400 ml)" | "2 tenen"
const QTY_RE = /^(\d+(?:\/\d+)?|\d*\.?\d+)\s*(.*)$/;
function scaleQty(qty: string, mult: number): string {
  const match = qty.trim().match(QTY_RE);
  if (!match || mult === 1) return qty;
  let num = parseFloat(match[1]);
  if (match[1].includes('/')) {
    const [a, b] = match[1].split('/').map(Number);
    num = a / b;
  }
  if (Number.isNaN(num)) return qty;
  const scaled = round(num * mult);
  return `${scaled} ${match[2]}`.trim();
}

function round(n: number): number {
  return Math.round(n * 100) / 100;
}

export default function BoodschappenlijstGenerator() {
  const [sel, setSel] = useState<Record<string, Sel>>({});
  const [done, setDone] = useState<Record<string, boolean>>({});

  const list = useMemo(() => {
    const items: Record<string, { label: string; qty?: string }> = {};
    const add = (key: string, label: string, qty?: string) => {
      if (items[key]) {
        if (qty) {
          // combine similar qty units crudely
          const m = qty.match(/^([\d.]+)\s*(.*)$/);
          const ex = items[key].qty?.match(/^([\d.]+)\s*(.*)$/);
          if (m && ex && m[2] === ex[2]) {
            items[key].qty = `${round(parseFloat(m[1]) + parseFloat(ex[1]))} ${m[2]}`;
          }
        }
        return;
      }
      items[key] = { label, qty };
    };
    recipes.forEach((r) => {
      if (!sel[r.slug]) return;
      const m = sel[r.slug].multiplier;
      r.ingredients.forEach((ing) => {
        const name = ing.name.toLowerCase();
        add(name, ing.name, ing.qty ? scaleQty(ing.qty, m) : undefined);
      });
    });
    return items;
  }, [sel]);

  const grouped = useMemo(() => {
    const map: Record<string, { key: string; label: string; qty?: string }[]> = {};
    Object.values(list).forEach((it) => {
      const g = categorize(it.label);
      (map[g] ??= []).push(it);
    });
    return Object.entries(map);
  }, [list]);

  const toggle = (slug: string, on: boolean) => {
    setSel((s) => {
      const next = { ...s };
      if (on) next[slug] = { multiplier: 1 };
      else delete next[slug];
      return next;
    });
  };

  const setMult = (slug: string, multiplier: number) =>
    setSel((s) => ({ ...s, [slug]: { multiplier } }));

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
      {/* Left: pick recipes */}
      <section>
        <h2 className="mb-1 font-serif text-xl font-bold text-gray-900">1. Kies je gerechten</h2>
        <p className="mb-4 text-sm text-gray-500">Selecteer de recepten die je deze week maakt.</p>
        <div className="space-y-2">
          {recipes.map((r) => (
            <RecipePicker
              key={r.slug}
              recipe={r}
              checked={!!sel[r.slug]}
              onToggle={(on) => toggle(r.slug, on)}
              multiplier={sel[r.slug]?.multiplier ?? 1}
              onMult={(m) => setMult(r.slug, m)}
            />
          ))}
        </div>
      </section>

      {/* Right: generated list */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-serif text-xl font-bold text-gray-900">2. Je boodschappenlijst</h2>
          <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">{recipes.filter((r) => sel[r.slug]).length} geselecteerd</span>
        </div>

        {recipes.filter((r) => sel[r.slug]).length === 0 ? (
          <p className="rounded-xl border border-dashed border-gray-300 p-6 text-center text-sm text-gray-400">
            Selecteer links één of meer recepten om je lijst te genereren.
          </p>
        ) : (
          <>
            <div className="mb-4 space-y-4">
              {grouped.map(([group, items]) => (
                <div key={group}>
                  <h3 className="mb-1 text-sm font-bold text-brand-700">{group}</h3>
                  <ul className="space-y-1">
                    {items.map((it) => (
                      <li key={it.key} className="flex items-start gap-2 text-sm text-gray-700">
                        <input type="checkbox" className="mt-1 h-3.5 w-3.5 accent-brand-600" />
                        <span>{it.qty ? `${it.qty} ` : ''}{it.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 border-t border-gray-100 pt-4">
              <button
                onClick={() => window.print()}
                className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
              >
                🖨 Printen
              </button>
              <button
                onClick={() => { setSel({}); setDone({}); }}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-50"
              >
                Lijst opnieuw beginnen
              </button>
            </div>
          </>
        )}
      </section>
    </div>
  );
}

function RecipePicker({ recipe, checked, onToggle, multiplier, onMult }: {
  recipe: RecipeMeta;
  checked: boolean;
  onToggle: (on: boolean) => void;
  multiplier: number;
  onMult: (m: number) => void;
}) {
  return (
    <label className={`flex items-center gap-3 rounded-2xl border p-3 transition-colors ${checked ? 'border-brand-400 bg-brand-50' : 'border-gray-200 bg-white hover:border-brand-200'}`}>
      <input type="checkbox" checked={checked} onChange={(e) => onToggle(e.target.checked)} className="h-4 w-4 accent-brand-600" />
      <span className="flex-1 text-sm font-semibold text-gray-800">{recipe.title}</span>
      {checked && (
        <span className="flex items-center gap-1">
          <button type="button" onClick={(e) => { e.preventDefault(); onMult(Math.max(0.5, multiplier - 0.5)); }} className="h-7 w-7 rounded-full border border-brand-300 text-brand-700 hover:bg-brand-100">−</button>
          <span className="w-8 text-center text-sm font-semibold text-gray-700">{multiplier}x</span>
          <button type="button" onClick={(e) => { e.preventDefault(); onMult(multiplier + 0.5); }} className="h-7 w-7 rounded-full border border-brand-300 text-brand-700 hover:bg-brand-100">+</button>
        </span>
      )}
    </label>
  );
}