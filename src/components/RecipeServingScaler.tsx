// 份数缩放：调整份数后，食材数量按比例变化；可一键打印食谱。
// 对标竞品 GezondeLeven.be / OhMyFoodness.nl 的份数缩放功能。
import { useState } from 'react';
import type { Ingredient } from '../data/types';

const QTY_RE = /^(\d+(?:\/\d+)?|\d*\.?\d+)\s*(.*)$/;

function round(n: number): number {
  return Math.round(n * 100) / 100;
}

function scaleQty(qty: string, mult: number): string {
  const match = qty.trim().match(QTY_RE);
  if (!match) return qty;
  let num = parseFloat(match[1]);
  if (match[1].includes('/')) {
    const [a, b] = match[1].split('/').map(Number);
    num = a / b;
  }
  if (Number.isNaN(num)) return qty;
  const scaled = round(num * mult);
  // 换算结果带小数时尽量友好
  return `${scaled} ${match[2]}`.trim();
}

const STEPS = [0.5, 1, 2, 3, 4];

export default function RecipeServingScaler({
  baseServings,
  ingredients,
  steps,
  recipeTitle,
}: {
  baseServings: number;
  ingredients: Ingredient[];
  steps: string[];
  recipeTitle: string;
}) {
  const [servings, setServings] = useState(baseServings);
  const ratio = servings / baseServings;

  return (
    <div>
      {/* Serving control + print */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-brand-200 bg-brand-50 p-3">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-gray-700">Porties:</span>
          <span className="mx-1 flex items-center overflow-hidden rounded-lg border border-brand-200 bg-white">
            {STEPS.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setServings(s)}
                className={`px-3 py-1.5 text-sm font-semibold transition-colors ${
                  servings === s ? 'bg-brand-600 text-white' : 'text-gray-600 hover:bg-brand-100'
                }`}
              >
                {s}
              </button>
            ))}
          </span>
        </div>
        <button
          onClick={() => window.print()}
          className="rounded-lg bg-white px-3 py-1.5 text-sm font-semibold text-brand-700 shadow-sm ring-1 ring-brand-200 transition-colors hover:bg-brand-100"
        >
          🖨 Print recept
        </button>
      </div>

      {/* Ingredients with scaled quantities */}
      <ul id="print-ingredienten" className="space-y-2 rounded-2xl border border-gray-200 bg-white p-5">
        {ingredients.map((i, idx) => (
          <li key={idx} className="flex items-baseline gap-2 text-sm text-gray-700">
            <span className="h-1.5 w-1.5 shrink-0 translate-y-[-2px] rounded-full bg-brand-500"></span>
            <span className="min-w-20 font-semibold text-brand-700">
              {i.qty ? scaleQty(i.qty, baseServings === servings ? 1 : ratio) : '–'}
            </span>
            <span>{i.name}</span>
          </li>
        ))}
      </ul>

      {/* Steps scaled note (do not scale steps, but keep for print) */}
      <ol id="print-stappen" className="mt-7 space-y-4 print:mt-4">
        {steps.map((s, i) => (
          <li key={i} className="flex gap-3 rounded-2xl border border-gray-200 bg-white p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
              {i + 1}
            </span>
            <p className="text-sm text-gray-700">{s}</p>
          </li>
        ))}
      </ol>

      <span className="hidden print:block text-sm font-bold text-gray-900">{recipeTitle}</span>
    </div>
  );
}