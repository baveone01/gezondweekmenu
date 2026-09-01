import type { WeekMenu } from './types';

// Weekmenu database. Elk menu koppelt maaltijden aan recepten (internal linking) en heeft een
// geaggregeerde boodschappenlijst, tips en FAQ.
export const weekmenus: WeekMenu[] = [
  {
    slug: 'gezond-weekmenu-1-voor-gezinnen',
    title: 'Gezond weekmenu 1 voor gezinnen',
    weekLabel: 'Weekmenu 1',
    description:
      'Een makkelijk, gezond weekmenu voor het hele gezin: 7 dagen gezonde recepten, met complete boodschappenlijst en meal prep tips.',
    intro:
      'Dit weekmenu is gemaakt voor drukke gezinnen die gezond willen eten zonder stress. Elke dag staat een ontbijt, lunch, warme avondmaaltijd en een snack op de planning. De meeste recepten staan in 30 minuten op tafel.',
    days: [
      {
        day: 'Maandag',
        theme: 'Frisse start met veel groenten',
        ontbijt: { text: 'Overnight oats met blauwe bessen', recipeSlug: 'overnight-oats-met-bessen' },
        lunch: { text: 'Quinoasalade met feta en komkommer', recipeSlug: 'quinoasalade-met-feta-en-komkommer' },
        avondeten: { text: 'Kipkerrie met kokosmelk en rijst', recipeSlug: 'kipkerrie-met-kokosmelk-en-rijst' },
        snack: { text: 'Stukje fruit + handje noten' },
      },
      {
        day: 'Dinsdag',
        theme: 'Snelle gerechten voor een drukke dag',
        ontbijt: { text: 'Avocado toast met gepocheerd ei', recipeSlug: 'avocado-toast-met-gepocheerd-ei' },
        lunch: { text: 'Romige groentesoep met kikkererwten', recipeSlug: 'groentesoep-met-kikkererwten' },
        avondeten: { text: 'Courgette noedels met avocado-pesto', recipeSlug: 'courgette-noedels-met-pesto' },
        snack: { text: 'Griekse yoghurt met een vleugje honing' },
      },
      {
        day: 'Woensdag',
        theme: 'Midden van de week, tijd voor comfort',
        ontbijt: { text: 'Overnight oats met blauwe bessen', recipeSlug: 'overnight-oats-met-bessen' },
        lunch: { text: 'Restje kipkerrie met rijst' },
        avondeten: { text: 'Gestoofde zalm met geroosterde groenten', recipeSlug: 'zalm-met-geroosterde-groenten' },
        snack: { text: 'Wortelreepjes met hummus' },
      },
      {
        day: 'Donderdag',
        theme: 'Vegetarisch en toch goed vullend',
        ontbijt: { text: 'Avocado toast met gepocheerd ei', recipeSlug: 'avocado-toast-met-gepocheerd-ei' },
        lunch: { text: 'Quinoasalade met feta en komkommer', recipeSlug: 'quinoasalade-met-feta-en-komkommer' },
        avondeten: { text: 'Romige kikkererwtencurry met spinazie', recipeSlug: 'kikkererwtencurry-met-spinazie' },
        snack: { text: 'Gekookt ei' },
      },
      {
        day: 'Vrijdag',
        theme: 'Gezond, maar met weekendgevoel',
        ontbijt: { text: 'Overnight oats met blauwe bessen', recipeSlug: 'overnight-oats-met-bessen' },
        lunch: { text: 'Romige groentesoep met kikkererwten', recipeSlug: 'groentesoep-met-kikkererwten' },
        avondeten: { text: 'Gehaktballetjes in tomatensaus met courgettepasta', recipeSlug: 'gehaktballetjes-in-tomatensaus-met-courgettepasta' },
        snack: { text: 'Stukje fruit' },
      },
      {
        day: 'Zaterdag',
        theme: 'Ruimte om te genieten, toch in balans',
        ontbijt: { text: 'Yoghurt met granola en fruit' },
        lunch: { text: 'Restjes van de week oproemen' },
        avondeten: { text: 'Kipkerrie met kokosmelk en rijst', recipeSlug: 'kipkerrie-met-kokosmelk-en-rijst' },
        snack: { text: 'Handje amandelen' },
      },
      {
        day: 'Zondag',
        theme: 'Restjes opmaken en voorbereiden op de nieuwe week',
        ontbijt: { text: 'Brunch met avocado toast en een ei', recipeSlug: 'avocado-toast-met-gepocheerd-ei' },
        lunch: { text: 'Romige groentesoep met kikkererwten', recipeSlug: 'groentesoep-met-kikkererwten' },
        avondeten: { text: 'Restjes + een frisse salade erbij' },
        snack: { text: 'Gezonde chocolade-bananenmuffin', recipeSlug: 'chocolade-bananenmuffins' },
      },
    ],
    shoppingList: [
      { group: 'Groenten', items: ['2 courgettes', '1 grote broccoli', '3 wortels', 'sperziebonen (250 g)', 'verse spinazie (300 g)', 'avocado (2x)', 'rucola', 'ui (3x)', 'knoflook (meerdere tenen)', 'gember', 'blauwe bessen (150 g)'] },
      { group: 'Vlees & vis', items: ['kipfilet (500 g + extra)', 'zalmfilets (2x)', 'rundergehakt (500 g)'] },
      { group: 'Zuivel & plantaardig', items: ['eieren (1 dozijn)', 'feta (150 g)', 'griekse yoghurt', 'melk of plantaardige melk'] },
      { group: 'Pasta, rijst & noten', items: ['zilvervliesrijst', 'quinoa (200 g)', 'havermout (80 g)', 'amandelmeel', 'pijnboompitten', 'amandelen'] },
      { group: 'Houdbaar', items: ['kokosmelk (2 blikken)', 'tomatenblokjes (2 blikken)', 'kikkererwten (2-3 blikken)', 'tomatenspiritus', 'olijfolie'] },
      { group: 'Kruiden & specerijen', items: ['kerriepoeder', 'garam masala', 'komijn', 'kurkuma', 'oregano', 'dille', 'cacaopoeder'] },
    ],
    prepTips: [
      'Kook op zondag een dubbele portie rijst en soep; vries porties in voor drukke dagen.',
      'Maak op zaterdag de overnight oats alvast klaar en zet ze in de koelkast.',
      "Was en snijd groenten direct na het boodschappen doen, zodat avondeten 's avonds sneller klaar is.",
      'Restjes van de kipkerrie en soep zijn perfect als lunch de volgende dag.',
    ],
    faq: [
      { q: 'Kan ik dit weekmenu invriezen?', a: 'Ja. De soep, kipkerrie en curry kun je prima invriezen in porties. De salade en advocaatgerechten bewaar je in de koelkast.' },
      { q: 'Hoe maak ik dit weekmenu vegetarisch?', a: 'Vervang kip en zalm door kikkererwten, tofu of vegetarisch gehakt. De recepten hebben vaak al een vegetarische variant.' },
      { q: 'Is dit weekmenu koolhydraatarm?', a: 'Niet volledig, maar veel gerechten (zalm, curry, noedels, gehaktballetjes) zijn koolhydraatarm. Vervang de rijst door bloemkoolrijst voor een koolhydraatarm alternatief.' },
      { q: 'Hoeveel kost dit weekmenu voor 4 personen?', a: 'De exacte prijs verschilt per supermarkt, maar de meeste ingrediënten zijn eenvoudig en voordelig. Gebruik huismerken en seizoensgroenten om te besparen.' },
    ],
    imagePrompt:
      'Healthy family weekly meal prep on a kitchen counter: fresh vegetables in bowls, brown rice, salmon, chickpeas, herbs, bright natural light, organized and appetizing, overhead view',
    featured: true,
  },

  {
    slug: 'gezond-weekmenu-2-koolhydraatarm',
    title: 'Gezond weekmenu 2: koolhydraatarm',
    weekLabel: 'Weekmenu 2 · Koolhydraatarm',
    description:
      'Een koolhydraatarm weekmenu vol eiwitten en groenten. 7 dagen koolhydraatarme recepten met complete boodschappenlijst.',
    intro:
      'Wil je minderen met koolhydraten maar niet inleveren op smaak? Dit koolhydraatarme weekmenu zit vol eiwitrijke gerechten en groenten, zonder patat, pasta en brood.',
    days: [
      {
        day: 'Maandag',
        theme: 'Krachtige start',
        ontbijt: { text: 'Overnight oats met blauwe bessen', recipeSlug: 'overnight-oats-met-bessen' },
        lunch: { text: 'Quinoasalade met feta en komkommer', recipeSlug: 'quinoasalade-met-feta-en-komkommer' },
        avondeten: { text: 'Gestoofde zalm met geroosterde groenten', recipeSlug: 'zalm-met-geroosterde-groenten' },
        snack: { text: 'Gekookt ei' },
      },
      {
        day: 'Dinsdag',
        theme: 'Groente-extravaganza',
        ontbijt: { text: 'Avocado toast met gepocheerd ei', recipeSlug: 'avocado-toast-met-gepocheerd-ei' },
        lunch: { text: 'Romige groentesoep met kikkererwten', recipeSlug: 'groentesoep-met-kikkererwten' },
        avondeten: { text: 'Courgette noedels met avocado-pesto', recipeSlug: 'courgette-noedels-met-pesto' },
        snack: { text: 'Wortelreepjes met hummus' },
      },
      {
        day: 'Woensdag',
        theme: 'Eiwitpower',
        ontbijt: { text: 'Yoghurt met gehakte noten en chiazaad' },
        lunch: { text: 'Restje zalm met groenten' },
        avondeten: { text: 'Gehaktballetjes in tomatensaus met courgettepasta', recipeSlug: 'gehaktballetjes-in-tomatensaus-met-courgettepasta' },
        snack: { text: 'Stukje kaas' },
      },
      {
        day: 'Donderdag',
        theme: 'Plantaardig en vullend',
        ontbijt: { text: 'Overnight oats met blauwe bessen', recipeSlug: 'overnight-oats-met-bessen' },
        lunch: { text: 'Quinoasalade met feta en komkommer', recipeSlug: 'quinoasalade-met-feta-en-komkommer' },
        avondeten: { text: 'Romige kikkererwtencurry met spinazie', recipeSlug: 'kikkererwtencurry-met-spinazie' },
        snack: { text: 'Handje amandelen' },
      },
      {
        day: 'Vrijdag',
        theme: 'Lekker en makkelijk',
        ontbijt: { text: 'Avocado toast met gepocheerd ei', recipeSlug: 'avocado-toast-met-gepocheerd-ei' },
        lunch: { text: 'Romige groentesoep met kikkererwten', recipeSlug: 'groentesoep-met-kikkererwten' },
        avondeten: { text: 'Kipkerrie met bloemkoolrijst', recipeSlug: 'kipkerrie-met-kokosmelk-en-rijst' },
        snack: { text: 'Griekse yoghurt' },
      },
      {
        day: 'Zaterdag',
        theme: 'Fris en licht',
        ontbijt: { text: 'Yoghurt met blauwe bessen en noten' },
        lunch: { text: 'Quinoasalade met feta', recipeSlug: 'quinoasalade-met-feta-en-komkommer' },
        avondeten: { text: 'Courgette noedels met avocado-pesto', recipeSlug: 'courgette-noedels-met-pesto' },
        snack: { text: 'Gekookt ei' },
      },
      {
        day: 'Zondag',
        theme: 'Restjes en voorbereiding',
        ontbijt: { text: 'Brunch met avocado toast en een ei', recipeSlug: 'avocado-toast-met-gepocheerd-ei' },
        lunch: { text: 'Romige groentesoep met kikkererwten', recipeSlug: 'groentesoep-met-kikkererwten' },
        avondeten: { text: 'Restjes curry met een frisse salade' },
        snack: { text: 'Gezonde chocolade-bananenmuffin', recipeSlug: 'chocolade-bananenmuffins' },
      },
    ],
    shoppingList: [
      { group: 'Groenten', items: ['2 courgettes (voor noedels)', '1 grote broccoli', '3 wortels', 'verse spinazie (300 g)', 'avocado (2x)', 'ui (3x)', 'knoflook', 'sperziebonen (250 g)'] },
      { group: 'Eiwitten (vlees & vis)', items: ['kiplfilet (500 g)', 'zalmfilets (2x)', 'rundergehakt (500 g)'] },
      { group: 'Zuivel & plantaardig', items: ['eieren (1 dozijn)', 'feta (150 g)', 'griekse yoghurt', '(plantaardige) melk', 'chiazaad'] },
      { group: 'Noten & zaden', items: ['amandelen', 'pijnboompitten', 'havermout'] },
      { group: 'Houdbaar', items: ['kokosmelk (2 blikken)', 'tomatenblokjes (2 blikken)', 'kikkererwten (2 blikken)', 'tomatenspiritus', 'olijfolie', 'kerriepoeder', 'kurkuma', 'komijn'] },
    ],
    prepTips: [
      'Rooster een extra bak zalm en groenten op maandag, zo heb je woensdag direct een snelle lunch.',
      'Vervang rijst consequent door bloemkoolrijst of courgettepasta voor een maximale reductie van koolhydraten.',
      'Maak de curry in een grote pan en vries porties in voor later in de week.',
    ],
    faq: [
      { q: 'Is 30 gram koolhydraten per maaltijd oké?', a: 'Overleg altijd met een diëtist wat bij jouw situatie past. Dit menu heeft bewust veel groenten en eiwitten en weinig snelle koolhydraten.' },
      { q: 'Mag ik koffie bij dit menu?', a: 'Ja, koffie en thee zonder suiker passen prima binnen dit koolhydraatarme weekmenu.' },
      { q: 'Kunnen kinderen dit ook eten?', a: 'Bijna alle gerechten zijn kindvriendelijk. Voeg eventueel een sneetje brood of wat extra rijst toe voor jonge eten.' },
    ],
    imagePrompt:
      'Low-carb meal prep spread: grilled salmon, broccoli, zucchini noodles, chickpea curry, eggs and almonds on a light wooden table, fresh and colorful, overhead food photography',
  },

  {
    slug: 'gezond-weekmenu-3-vegetarisch',
    title: 'Gezond weekmenu 3: vegetarisch',
    weekLabel: 'Weekmenu 3 · Vegetarisch',
    description:
      'Een volledig vegetarisch weekmenu vol kleur en smaak. 7 dagen vegetarische recepten met complete boodschappenlijst voor het hele gezin.',
    intro:
      'Eet je vaker vegetarisch? Dit weekmenu bewijst dat vleesloos eten allesbehalve saai is. Van romige curries tot verse salades, boordevol eiwitten uit peulvruchten, zuivel en noten.',
    days: [
      {
        day: 'Maandag',
        theme: 'Vrolijk de week in',
        ontbijt: { text: 'Overnight oats met blauwe bessen', recipeSlug: 'overnight-oats-met-bessen' },
        lunch: { text: 'Quinoasalade met feta en komkommer', recipeSlug: 'quinoasalade-met-feta-en-komkommer' },
        avondeten: { text: 'Romige kikkererwtencurry met spinazie', recipeSlug: 'kikkererwtencurry-met-spinazie' },
        snack: { text: 'Stukje fruit' },
      },
      {
        day: 'Dinsdag',
        theme: 'Groente op het bord',
        ontbijt: { text: 'Avocado toast met gepocheerd ei', recipeSlug: 'avocado-toast-met-gepocheerd-ei' },
        lunch: { text: 'Romige groentesoep met kikkererwten', recipeSlug: 'groentesoep-met-kikkererwten' },
        avondeten: { text: 'Courgette noedels met avocado-pesto', recipeSlug: 'courgette-noedels-met-pesto' },
        snack: { text: 'Wortelreepjes met hummus' },
      },
      {
        day: 'Woensdag',
        theme: 'Peulvruchten in de hoofdrol',
        ontbijt: { text: 'Overnight oats met blauwe bessen', recipeSlug: 'overnight-oats-met-bessen' },
        lunch: { text: 'Quinoasalade met feta en komkommer', recipeSlug: 'quinoasalade-met-feta-en-komkommer' },
        avondeten: { text: 'Romige kikkererwtencurry met spinazie', recipeSlug: 'kikkererwtencurry-met-spinazie' },
        snack: { text: 'Griekse yoghurt' },
      },
      {
        day: 'Donderdag',
        theme: 'Fris en vullend',
        ontbijt: { text: 'Avocado toast met gepocheerd ei', recipeSlug: 'avocado-toast-met-gepocheerd-ei' },
        lunch: { text: 'Romige groentesoep met kikkererwten', recipeSlug: 'groentesoep-met-kikkererwten' },
        avondeten: { text: 'Quinoasalade met feta en komkommer', recipeSlug: 'quinoasalade-met-feta-en-komkommer' },
        snack: { text: 'Handje noten' },
      },
      {
        day: 'Vrijdag',
        theme: 'Knus en romig',
        ontbijt: { text: 'Overnight oats met blauwe bessen', recipeSlug: 'overnight-oats-met-bessen' },
        lunch: { text: 'Restje kikkererwtencurry' },
        avondeten: { text: 'Courgette noedels met avocado-pesto', recipeSlug: 'courgette-noedels-met-pesto' },
        snack: { text: 'Stukje kaas' },
      },
      {
        day: 'Zaterdag',
        theme: 'Ruimte om te genieten',
        ontbijt: { text: 'Brunch met avocado toast en een ei', recipeSlug: 'avocado-toast-met-gepocheerd-ei' },
        lunch: { text: 'Quinoasalade met feta', recipeSlug: 'quinoasalade-met-feta-en-komkommer' },
        avondeten: { text: 'Romige groentesoep met kikkererwten als voorgerecht + salade', recipeSlug: 'groentesoep-met-kikkererwten' },
        snack: { text: 'Gezonde chocolade-bananenmuffin', recipeSlug: 'chocolade-bananenmuffins' },
      },
      {
        day: 'Zondag',
        theme: 'Restjes en voorbereiden',
        ontbijt: { text: 'Yoghurt met granola en fruit' },
        lunch: { text: 'Restjes van de week oproemen' },
        avondeten: { text: 'Romige kikkererwtencurry met spinazie', recipeSlug: 'kikkererwtencurry-met-spinazie' },
        snack: { text: 'Stukje fruit' },
      },
    ],
    shoppingList: [
      { group: 'Groenten', items: ['2 courgettes (voor noedels)', 'verse spinazie (600 g)', 'avocado (2x)', 'ui (3x)', 'knoflook', 'wortels (3x)', 'bleekselderij', 'rucola'] },
      { group: 'Zuivel & plantaardig', items: ['eieren (1 dozijn)', 'feta (200 g)', 'griekse yoghurt', '(plantaardige) melk'] },
      { group: 'Peulvruchten & granen', items: ['kikkererwten (4-5 blikken)', 'quinoa (200 g)', 'havermout (80 g)', 'amandelmeel'] },
      { group: 'Noten & zaden', items: ['amandelen', 'pijnboompitten', 'chiazaad'] },
      { group: 'Houdbaar & specerijen', items: ['kokosmelk (2-3 blikken)', 'tomatenblokjes (2 blikken)', 'olijfolie', 'currypasta', 'komijn', 'kurkuma', 'cacaopoeder'] },
    ],
    prepTips: [
      'Maak op zondag een grote pan kikkererwtencurry; je hebt er meteen twee avonden profijt van.',
      'Rijpe avocado invriezen als puree is een slimme truc om altijd avocado bij de hand te hebben.',
      'Blijf variëren met peulvruchten: bonen, linzen en kikkererwten geven gevarieerde eiwitten en vezels.',
    ],
    faq: [
      { q: 'Krijg ik genoeg eiwitten binnen met dit menu?', a: 'Ja. Kikkererwten, zuivel, eieren en noten leveren ruim voldoende eiwitten. Varieer gerust met linzen en zwarte bonen.' },
      { q: 'Ook geschikt voor veganisten?', a: 'Veel gerechten zijn al (bijna) vegan, zoals de curry en de soep. Vervang eieren en feta door plantaardige alternatieven.' },
      { q: 'Zit er veel groente in?', a: 'Zeker. Elke maaltijd bevat meerdere porties groenten, wat bijdraagt aan een gevarieerd en vezelrijk voedingspatroon.' },
    ],
    imagePrompt:
      'Vegetarian weekly meal prep: chickpea curry with spinach, avocado toast, quinoa salad with feta, and vegetable soup on a colorful kitchen counter, vibrant and fresh, overhead food photography',
  },

  {
    slug: 'gezond-weekmenu-4-budget',
    title: 'Gezond weekmenu 4: budgetvriendelijk',
    weekLabel: 'Weekmenu 4 · Budget',
    description:
      'Een gezond weekmenu zonder dure boodschappen. 7 dagen budgetvriendelijke recepten met complete boodschappenlijst voor het hele gezin.',
    intro:
      'Gezond eten hoeft niet duur te zijn! Dit budgetweekmenu zit vol betaalbare, voedzame ingrediënten zoals linzen, eieren, seizoensgroenten en bonen. Zo eet je de hele week gezond zonder je budget te overschrijden.',
    days: [
      {
        day: 'Maandag',
        theme: 'Vullend en voordelig',
        ontbijt: { text: 'Havermout met banaan en kaneel' },
        lunch: { text: 'Linzensalade met feta en tomaat', recipeSlug: 'linzensalade-met-feta-en-tomaat' },
        avondeten: { text: 'Kikkererwtencurry met spinazie', recipeSlug: 'kikkererwtencurry-met-spinazie' },
        snack: { text: 'Appel' },
      },
      {
        day: 'Dinsdag',
        theme: 'Eieren in de spotlight',
        ontbijt: { text: 'Volkoren pannenkoeken met banaan', recipeSlug: 'volkoren-pannenkoeken-met-banaan' },
        lunch: { text: 'Restje kikkererwtencurry' },
        avondeten: { text: 'Griekse salade met kikkererwten', recipeSlug: 'griekse-koeksalade-met-kikkererwten' },
        snack: { text: 'Wortelreepjes' },
      },
      {
        day: 'Woensdag',
        theme: 'Pasta voor een prikkie',
        ontbijt: { text: 'Botermelkyoghurt met muesli' },
        lunch: { text: 'Linzensalade met feta', recipeSlug: 'linzensalade-met-feta-en-tomaat' },
        avondeten: { text: 'Gehaktballetjes in tomatensaus met courgettepasta', recipeSlug: 'gehaktballetjes-in-tomatensaus-met-courgettepasta' },
        snack: { text: 'Griekse yoghurt' },
      },
      {
        day: 'Donderdag',
        theme: 'Soep als maaltijd',
        ontbijt: { text: 'Havermout met appel' },
        lunch: { text: 'Zoete aardappelsoep met kokos', recipeSlug: 'zoete-aardappelsoep-met-kokos' },
        avondeten: { text: 'Courgette noedels met avocado-pesto', recipeSlug: 'courgette-noedels-met-pesto' },
        snack: { text: 'Handje noten' },
      },
      {
        day: 'Vrijdag',
        theme: 'Snel en simpel',
        ontbijt: { text: 'Avocado toast', recipeSlug: 'avocado-toast-met-gepocheerd-ei' },
        lunch: { text: 'Wrap met kip en crunchy groente', recipeSlug: 'wrap-met-kip-en-crunchy-groente' },
        avondeten: { text: 'Geroosterde groente-salade met feta', recipeSlug: 'ovengroente-salade-met-feta' },
        snack: { text: 'Stukje fruit' },
      },
      {
        day: 'Zaterdag',
        theme: 'Meal prep voor de week',
        ontbijt: { text: 'Brunch met pannenkoekjes' },
        lunch: { text: 'Restje groentesalade' },
        avondeten: { text: 'Kipkerrie met kokosmelk en rijst', recipeSlug: 'kipkerrie-met-kokosmelk-en-rijst' },
        snack: { text: 'Gezonde chocolade-bananenmuffin', recipeSlug: 'chocolade-bananenmuffins' },
      },
      {
        day: 'Zondag',
        theme: 'Restjes opruimen',
        ontbijt: { text: 'Overnight oats', recipeSlug: 'overnight-oats-met-bessen' },
        lunch: { text: 'Restjes van de week' },
        avondeten: { text: 'Romige groentesoep met kikkererwten', recipeSlug: 'groentesoep-met-kikkererwten' },
        snack: { text: 'Stukje fruit' },
      },
    ],
    shoppingList: [
      { group: 'Groenten', items: ['spinazie (600 g)', '3 courgettes', 'appel', 'wortels (4x)', 'ui (4x)', 'knoflook', 'avocado (2x)', 'tomaat', 'komkommer (2x)', 'paprika', 'rucola'] },
      { group: 'Zuivel & plantaardig', items: ['eieren (1 dozijn)', 'feta (200 g)', 'griekse yoghurt', 'melk'] },
      { group: 'Peulvruchten & granen', items: ['linzen (2-3 blikken)', 'kikkererwten (3-4 blikken)', 'havermout', 'volkorenmeel'] },
      { group: 'Houdbaar & specerijen', items: ['kokosmelk (3 blikken)', 'tomatenblokjes (2 blikken)', 'gehakt (500 g)', 'olijfolie', 'kerriepoeder', 'garam masala', 'kaneel'] },
    ],
    prepTips: [
      'Koop seizoensgroenten en huismerkproducten om flink te besparen.',
      'Maak de curry en de soep in een grote pan en verdeel over 2 dagen; zo bespaar je tijd én geld.',
      'Havermout en linzen zijn spotgoedkoop en supersnel te bereiden.',
    ],
    faq: [
      { q: 'Hoeveel kost dit gezonde weekmenu gemiddeld?', a: 'Als je huismerk en seizoensgroente gebruikt, ligt het gemiddeld rond de € 45-55 per week voor 4 personen. De exacte prijs verschilt per supermarkt.' },
      { q: 'Is dit weekmenu ook zonder vlees te maken?', a: 'Ja. Vervang het gehakt en de kip door linzen, bonen of vegetarisch gehakt. De meeste recepten zijn al (bijna) vegetarisch.' },
      { q: 'Kan ik dit weekmenu invriezen?', a: 'Zeker. De curry, soep en kipkerrie vries je prima in porties in, zodat je nog meer tijd en geld bespaart.' },
    ],
    imagePrompt:
      'Budget friendly healthy weekly meal prep on a kitchen counter: lentils, eggs, seasonal vegetables, oatmeal, chickpeas and canned tomatoes, simple and fresh, natural light, overhead food photography',
  },

  {
    slug: 'gezond-weekmenu-5-eiwitrijk',
    title: 'Gezond weekmenu 5: eiwitrijk',
    weekLabel: 'Weekmenu 5 · Eiwitrijk',
    description:
      'Een eiwitrijk weekmenu voor spierherstel en verzadiging. 7 dagen eiwitrijke recepten met complete boodschappenlijst, ideaal voor sporters en actieve gezinnen.',
    intro:
      'Eiwitten houden je lang verzadigd en zijn belangrijk voor spieren en herstel. Dit eiwitrijke weekmenu zit boordevol kip, eieren, zuivel, peulvruchten en vis, zonder in te leveren op smaak.',
    days: [
      {
        day: 'Maandag',
        theme: 'Krachtige start',
        ontbijt: { text: 'Griekse yoghurt met noten en fruit' },
        lunch: { text: 'Wrap met kip en crunchy groente', recipeSlug: 'wrap-met-kip-en-crunchy-groente' },
        avondeten: { text: 'Zalm met geroosterde groenten', recipeSlug: 'zalm-met-geroosterde-groenten' },
        snack: { text: 'Gekookt ei' },
      },
      {
        day: 'Dinsdag',
        theme: 'Peulvruchten en proteïne',
        ontbijt: { text: 'Avocado toast met gepocheerd ei', recipeSlug: 'avocado-toast-met-gepocheerd-ei' },
        lunch: { text: 'Linzensalade met feta en tomaat', recipeSlug: 'linzensalade-met-feta-en-tomaat' },
        avondeten: { text: 'Kipkerrie met kokosmelk en rijst', recipeSlug: 'kipkerrie-met-kokosmelk-en-rijst' },
        snack: { text: 'Griekse yoghurt' },
      },
      {
        day: 'Woensdag',
        theme: 'Visdag',
        ontbijt: { text: 'Volkoren pannenkoeken met banaan', recipeSlug: 'volkoren-pannenkoeken-met-banaan' },
        lunch: { text: 'Griekse salade met kikkererwten', recipeSlug: 'griekse-koeksalade-met-kikkererwten' },
        avondeten: { text: 'Zalm met geroosterde groenten', recipeSlug: 'zalm-met-geroosterde-groenten' },
        snack: { text: 'Handje amandelen' },
      },
      {
        day: 'Donderdag',
        theme: 'Koolhydraatarm met eiwit',
        ontbijt: { text: 'Overnight oats met whey', recipeSlug: 'overnight-oats-met-bessen' },
        lunch: { text: 'Zoete aardappelsoep + gekookt ei', recipeSlug: 'zoete-aardappelsoep-met-kokos' },
        avondeten: { text: 'Courgette noedels met gehaktballetjes', recipeSlug: 'gehaktballetjes-in-tomatensaus-met-courgettepasta' },
        snack: { text: 'Puur stukje kaas' },
      },
      {
        day: 'Vrijdag',
        theme: 'Powerlunch',
        ontbijt: { text: 'Griekse yoghurt met fruit' },
        lunch: { text: 'Wrap met kip', recipeSlug: 'wrap-met-kip-en-crunchy-groente' },
        avondeten: { text: 'Kikkererwtencurry met spinazie', recipeSlug: 'kikkererwtencurry-met-spinazie' },
        snack: { text: 'Eiwitshake' },
      },
      {
        day: 'Zaterdag',
        theme: 'Genieten na het sporten',
        ontbijt: { text: 'Brunch met avocado toast en eieren' },
        lunch: { text: 'Linzensalade met feta', recipeSlug: 'linzensalade-met-feta-en-tomaat' },
        avondeten: { text: 'Kipkerrie met kokosmelk', recipeSlug: 'kipkerrie-met-kokosmelk-en-rijst' },
        snack: { text: 'Gezonde chocolade-bananenmuffin', recipeSlug: 'chocolade-bananenmuffins' },
      },
      {
        day: 'Zondag',
        theme: 'Meal prep',
        ontbijt: { text: 'Pannenkoeken met banaan' },
        lunch: { text: 'Restjes van de week' },
        avondeten: { text: 'Geroosterde groente-salade met extra kip', recipeSlug: 'ovengroente-salade-met-feta' },
        snack: { text: 'Stukje fruit' },
      },
    ],
    shoppingList: [
      { group: 'Vlees & vis', items: ['kipfilet (750 g)', 'zalmfilets (4x)', 'rundergehakt (500 g)'] },
      { group: 'Zuivel & plantaardig', items: ['eieren (1,5 dozijn)', 'griekse yoghurt (1 kg)', 'melk', 'kaas', 'feta (200 g)'] },
      { group: 'Groenten', items: ['spinazie (600 g)', '3 courgettes', 'avocado (2x)', 'komkommer', 'tomaat', 'paprika', 'ui', 'knoflook', 'wortels', 'zoete aardappel', 'rucola'] },
      { group: 'Peulvruchten & granen', items: ['linzen (2 blikken)', 'kikkererwten (2 blikken)', 'havermout', 'volkorenmeel', 'zilvervliesrijst'] },
      { group: 'Houdbaar & specerijen', items: ['kokosmelk (3 blikken)', 'tomatenblokjes', 'amandelen', 'olijfolie', 'kerriepoeder', 'garam masala', 'kaneel'] },
    ],
    prepTips: [
      'Bereid een grote bak kipkerrie en verdeel in porties voor lunch of een snelle avondmaaltijd.',
      'Houd een voorraad gekookte eieren in de koelkast voor een snelle eiwitrijke snack.',
      'Voeg voor nog meer eiwit een schep whey toe aan je overnight oats of smoothie.',
    ],
    faq: [
      { q: 'Hoeveel eiwitten zitten er in dit weekmenu?', a: 'Elke maaltijd bevat 25-40 gram eiwit, afhankelijk van de porties. Gemiddeld kom je op zo’n 120-150 gram eiwit per dag.' },
      { q: 'Is dit weekmenu ook geschikt om af te vallen?', a: 'Eiwitrijk eten helpt bij verzadiging en het behouden van spiermassa. Pas de porties aan je eigen energiebehoefte aan.' },
      { q: 'Kan ik dit weekmenu koolhydraatarm maken?', a: 'Ja. Vervang rijst en havermout door bloemkoolrijst en kies voor de koolhydraatarme varianten die bij de recepten staan.' },
    ],
    imagePrompt:
      'High protein healthy weekly meal prep: grilled chicken, salmon, eggs, greek yogurt, legumes and almonds on a clean kitchen counter, fresh and nutritious, bright natural light, overhead food photography',
  },
];

export const weekmenuBySlug = (slug: string): WeekMenu | undefined =>
  weekmenus.find((m) => m.slug === slug);

export const featuredMenus = (): WeekMenu[] => weekmenus.filter((m) => m.featured);