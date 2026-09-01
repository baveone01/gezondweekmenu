import type { RecipeMeta } from './types';

// Volledige receptendatabase. Gestructureerd zodat AI-beheer en uitbreiding makkelijk blijft.
export const recipes: RecipeMeta[] = [
  {
    slug: 'kipkerrie-met-kokosmelk-en-rijst',
    title: 'Kipkerrie met kokosmelk, rijst en sperziebonen',
    intro:
      'Dit romige kipkerrie recept staat in 30 minuten op tafel en is een favoriet bij het hele gezin. Met kokosmelk, sperziebonen en geurige kruiden.',
    category: 'avondeten',
    tags: ['gezond', 'snel', 'kindervriendelijk'],
    prepMin: 10,
    cookMin: 20,
    servings: 4,
    difficulty: 'gemakkelijk',
    ingredients: [
      { qty: '500 g', name: 'kipfilet, in blokjes' },
      { qty: '1 blik (400 ml)', name: 'kokosmelk' },
      { qty: '250 g', name: 'sperziebonen, schoongemaakt' },
      { qty: '300 g', name: 'zilvervliesrijst' },
      { qty: '1', name: 'ui, gesnipperd' },
      { qty: '2 tenen', name: 'knoflook, fijngehakt' },
      { qty: '1 tl', name: 'kerriepoeder (Mild Madrasi)' },
      { qty: '1 tl', name: 'garam masala' },
      { qty: '1 tl', name: 'gember, geraspt' },
      { qty: '1', name: 'bouillonblokje (kip)' },
      { qty: 'peper &', name: 'zout' },
    ],
    
    steps: [
      'Kook de zilvervliesrijst volgens de aanwijzingen op de verpakking.',
      'Fruit de ui en knoflook in een ruime pan met een scheutje olie tot ze glazig zijn. Voeg gember, kerriepoeder en garam masala toe en bak 1 minuut mee.',
      'Voeg de kipblokjes toe en bak ze rondom bruin.',
      'Giet de kokosmelk erbij, verkruimel het bouillonblokje erover en breng aan de kook. Laat 12 minuten zachtjes pruttelen.',
      'Kook ondertussen de sperziebonen 6-8 minuten in licht gezouten water.',
      'Breng de saus op smaak met peper en zout. Serveer de kipkerrie met rijst en sperziebonen.',
    ],
    variations: [
      {
        title: 'Vegetarisch',
        text: 'Vervang de kip door kikkererwten (1 blik) of blokjes tofu. Voeg ze mee toe met de kokosmelk.',
      },
      {
        title: 'Koolhydraatarm',
        text: 'Serveer de kerrie met bloemkoolrijst in plaats van zilvervliesrijst.',
      },
      {
        title: 'Extra romig',
        text: 'Roer op het einde 2 eetlepels crème fraîche door de saus voor een nog romiger resultaat.',
      },
    ],
    tips: [
      'Bak het kerriepoeder kort mee met de ui; dat haalt de smaak er veel meer uit.',
      'Kook een dubbele portie rijst en vries de rest in voor een snelle lunch.',
    ],
    nutrition: { kcal: 485, protein: 38, carbs: 48, fat: 18, fiber: 6 },
    imagePrompt:
      'Homemade Dutch chicken curry in creamy coconut sauce with green beans and rice in a white bowl, warm natural light, food photography, rustic kitchen, appetizing, top-down angle',
    featured: true,
  },

  {
    slug: 'avocado-toast-met-gepocheerd-ei',
    title: 'Avocado toast met gepocheerd ei',
    intro:
      'Een voedzaam ontbijt met romige avocado, een zacht gepocheerd ei en knapperig volkorenbrood. In 15 minuten klaar.',
    category: 'ontbijt',
    tags: ['gezond', 'vegetarisch', 'snel'],
    prepMin: 10,
    cookMin: 5,
    servings: 2,
    difficulty: 'gemakkelijk',
    ingredients: [
      { qty: '2 dikke sneden', name: 'volkorenbrood' },
      { qty: '1', name: 'rijpe avocado' },
      { qty: '2', name: 'eieren' },
      { qty: '1 tl', name: 'citroensap' },
      { qty: 'scheutje', name: 'olijfolie' },
      { qty: '1 snuf', name: 'chilivlokken' },
      { qty: 'peper &', name: 'zout' },
      { qty: 'handje', name: 'rucola (optioneel)' },
    ],
    
    steps: [
      'Rooster het brood goudbruin.',
      'Pureer de avocado met citroensap, olijfolie, peper en zout tot een grove spread.',
      'Pocheer de eieren: breng water met een scheutje azijn aan de kook, draai het vuur zacht en schuif de eieren voorzichtig in het water. Pocheer 3 minuten.',
      'Smeer de avocadospread op het brood en leg het gepocheerde ei erop.',
      'Bestrooi met chilivlokken en eventueel rucola erbij.',
    ],
    variations: [
      {
        title: 'Vegan',
        text: 'Vervang het ei door gebakken tofu of een plantaardige eiervervanger.',
      },
      {
        title: 'Met zalm',
        text: 'Leg gerookte zalm onder de avocado voor extra eiwitten en omega-3.',
      },
    ],
    tips: [
      'Gebruik een rijpe avocado; die is romiger en makkelijker te prakken.',
      'Schep de avocado meteen met citroensap zodat hij niet verkleurt.',
    ],
    nutrition: { kcal: 380, protein: 16, carbs: 32, fat: 23, fiber: 8 },
    imagePrompt:
      'Avocado toast with perfectly poached egg on whole grain bread, sprinkled chili flakes, top-down food photography, bright morning kitchen light, fresh and healthy vibe',
  },

  {
    slug: 'courgette-noedels-met-pesto',
    title: 'Courgette noedels met avocado-pesto',
    intro:
      'Licht, fris en in 20 minuten klaar. Courgette noedels met een romige avocado-pesto en cherrytomaatjes. Heerlijk en vegetarisch.',
    category: 'avondeten',
    tags: ['vegetarisch', 'koolhydraatarm', 'snel', 'gezond'],
    prepMin: 10,
    cookMin: 10,
    servings: 3,
    difficulty: 'gemakkelijk',
    ingredients: [
      { qty: '3', name: 'courgettes, in noedels' },
      { qty: '1', name: 'rijpe avocado' },
      { qty: '1 handje', name: 'basilicum' },
      { qty: '2 tenen', name: 'knoflook' },
      { qty: '2 el', name: 'pijnboompitten (of walnoten)' },
      { qty: '2 el', name: 'citroensap' },
      { qty: '3 el', name: 'olijfolie' },
      { qty: '200 g', name: 'cherrytomaatjes, gehalveerd' },
      { qty: 'peper &', name: 'zout' },
      { qty: 'optioneel', name: 'parmezaanse kaas' },
    ],
    
    steps: [
      'Maak de avocado-pesto: mix avocado, basilicum, knoflook, pijnboompitten, citroensap en olijfolie in een keukenmachine tot een romige saus.',
      'Maak de courgettes met een spiraalsnijder (of dunschiller) tot noedels.',
      'Verhit een scheutje olie in een wok en roerbak de courgette noedels 2-3 minuten. Ze mogen beetgaar blijven.',
      'Roer de pesto en cherrytomaatjes door de noedels. Verwarm kort.',
      'Breng op smaak met peper en zout. Serveer eventueel met parmezaan.',
    ],
    variations: [
      {
        title: 'Met kip',
        text: 'Bak 300 g kipreepjes mee en voeg toe voor een extra vullende maaltijd.',
      },
      {
        title: 'Glutenvrij',
        text: 'Dit recept is van nature glutenvrij; laat het brood erbij achterwege.',
      },
    ],
    tips: [
      'Bak de courgette noedels kort; anders worden ze waterig en slap.',
      'Gebruik een stevige avocado zodat de pesto niet te dun wordt.',
    ],
    nutrition: { kcal: 240, protein: 6, carbs: 12, fat: 19, fiber: 7 },
    imagePrompt:
      'Zucchini noodles with creamy avocado pesto and cherry tomatoes in a shallow white bowl, fresh herbs, bright natural light, healthy vegetarian food photography',
  },

  {
    slug: 'groentesoep-met-kikkererwten',
    title: 'Romige groentesoep met kikkererwten',
    intro:
      'Een vullende, vegetarische soep vol groenten en eiwitrijke kikkererwten. Perfect voor een makkelijke lichte lunch of voorgerecht.',
    category: 'soep',
    tags: ['vegetarisch', 'gezond', 'kindervriendelijk'],
    prepMin: 15,
    cookMin: 30,
    servings: 4,
    difficulty: 'gemakkelijk',
    ingredients: [
      { qty: '1', name: 'ui, gesnipperd' },
      { qty: '2', name: 'wortels, in blokjes' },
      { qty: '1 stengel', name: 'bleekselderij' },
      { qty: '1 blik (400 g)', name: 'kikkererwten, uitgelekt' },
      { qty: '1 blik', name: 'tomatenblokjes' },
      { qty: '1 liter', name: 'groentebouillon' },
      { qty: '2 tenen', name: 'knoflook' },
      { qty: '1 tl', name: 'paprikapoeder' },
      { qty: '1 tl', name: 'komijn' },
      { qty: '2 el', name: 'olijfolie' },
      { qty: 'peper &', name: 'zout' },
    ],
    
    steps: [
      'Fruit de ui, knoflook, wortel en bleekselderij in olijfolie tot ze zacht zijn.',
      'Voeg paprikapoeder en komijn toe en bak 1 minuut mee.',
      'Giet de tomatenblokjes en groentebouillon erbij. Breng aan de kook en laat 25 minuten zachtjes pruttelen.',
      'Voeg de kikkererwten toe en warm nog 5 minuten door.',
      'Pureer de soep half met een staafmixer voor een romigere structuur. Breng op smaak met peper en zout.',
    ],
    variations: [
      {
        title: 'Met gehaktballetjes',
        text: 'Voeg gebakken rundergehaktballetjes toe voor een stevigere maaltijdsoep.',
      },
      {
        title: 'Extra vulling',
        text: 'Serveer met een schep gekookte volkorenpasta noedels.',
      },
    ],
    tips: [
      'Kikkererwten uit blik zijn klaar om te eten; spoel ze eerst even af onder water.',
      'Deze soep is heerlijk om in te vriezen en mee te nemen naar werk.',
    ],
    nutrition: { kcal: 210, protein: 10, carbs: 28, fat: 8, fiber: 9 },
    imagePrompt:
      'Creamy vegetable soup with chickpeas and tomatoes in a rustic bowl, steam rising, rustic wooden table, warm cozy light, Dutch home cooking, overhead shot',
  },

  {
    slug: 'quinoasalade-met-feta-en-komkommer',
    title: 'Quinoasalade met feta, komkommer en munt',
    intro:
      'Een frisse, voedzame salade met quinoa, feta, komkommer en munt. Ideaal voor een makkelijke lunch of als lichte avondmaaltijd.',
    category: 'salade',
    tags: ['vegetarisch', 'gezond', 'snel', 'glutenvrij'],
    prepMin: 15,
    cookMin: 15,
    servings: 3,
    difficulty: 'gemakkelijk',
    ingredients: [
      { qty: '200 g', name: 'quinoa' },
      { qty: '1/2', name: 'komkommer, in blokjes' },
      { qty: '150 g', name: 'feta, in blokjes' },
      { qty: '1 handje', name: 'verse munt, fijngehakt' },
      { qty: '200 g', name: 'cherrytomaatjes, gehalveerd' },
      { qty: '3 el', name: 'olijfolie' },
      { qty: '1', name: 'citroen (sap)' },
      { qty: 'peper &', name: 'zout' },
    ],
    
    steps: [
      'Spoel de quinoa af en kook deze volgens de verpakking. Laat afkoelen.',
      'Meng de quinoa met komkommer, feta, munt en cherrytomaatjes.',
      'Maak de dressing van olijfolie, citroensap, peper en zout. Schenk over de salade.',
      'Laat de salade 10 minuten staan zodat de smaken zich mengen.',
    ],
    variations: [
      {
        title: 'Vegan',
        text: 'Vervang de feta door vegan feta of extra avocado.',
      },
      {
        title: 'Met kip',
        text: 'Voeg gegrilde kipreepjes toe voor een extra vullende lunch.',
      },
    ],
    tips: [
      'Quinoa goed afspoelen verwijdert het bittere laagje.',
      'Deze salade blijft 2 dagen goed in de koelkast; ideaal voor meal prep.',
    ],
    nutrition: { kcal: 415, protein: 16, carbs: 44, fat: 20, fiber: 7 },
    imagePrompt:
      'Fresh quinoa salad with feta cheese, cucumber, tomatoes and mint leaves in a ceramic bowl, bright natural light, healthy Mediterranean style food photography, overhead view',
  },

  {
    slug: 'overnight-oats-met-bessen',
    title: 'Overnight oats met blauwe bessen',
    intro:
      'Maak je ontbijt de avond van tevoren! Romige overnight oats met blauwe bessen, chiazaad en een vleugje honing.',
    category: 'ontbijt',
    tags: ['gezond', 'vegetarisch', 'snel', 'glutenvrij'],
    prepMin: 10,
    cookMin: 0,
    servings: 2,
    difficulty: 'gemakkelijk',
    ingredients: [
      { qty: '80 g', name: 'havermout (glutenvrij)' },
      { qty: '200 ml', name: '(plantaardige) melk' },
      { qty: '2 el', name: 'chiazaad' },
      { qty: '1 el', name: 'honing of ahornsiroop' },
      { qty: '150 g', name: 'blauwe bessen' },
      { qty: '1/2 tl', name: 'vanille-extract (optioneel)' },
      { qty: '1 el', name: 'amandelschaafsel (optioneel)' },
    ],
    
    steps: [
      'Meng in een kom de havermout, chiazaad, melk, honing en vanille.',
      'Roer de blauwe bessen er deels doorheen.',
      'Dek af en zet minstens 4 uur (of een nacht) in de koelkast.',
      'Schep de volgende ochtend om en garneer met amandelschaafsel.',
    ],
    variations: [
      {
        title: 'Vegan',
        text: 'Gebruik plantaardige melk en honing door ahornsiroop te vervangen.',
      },
      {
        title: 'Eiwitrijk',
        text: 'Voeg een schep proteïnepoeder toe voor een extra eiwitrijk ontbijt.',
      },
    ],
    tips: [
      'Gebruik een jampotje met deksel; dan kun je de oats makkelijk meenemen.',
      'Chiazaad maakt de oats dikker en geeft extra vezels.',
    ],
    nutrition: { kcal: 320, protein: 12, carbs: 48, fat: 11, fiber: 9 },
    imagePrompt:
      'Overnight oats in a glass jar with blueberries, chia seeds and almond flakes on top, fresh berry, bright morning light, minimal healthy breakfast styling',
  },

  {
    slug: 'zalm-met-geroosterde-groenten',
    title: 'Gestoofde zalm met geroosterde groenten',
    intro:
      'Een makkelijke, koolhydraatarme maaltijd rijk aan omega-3. Zalm met knapperige geroosterde groenten uit de oven in 25 minuten.',
    category: 'avondeten',
    tags: ['gezond', 'koolhydraatarm', 'glutenvrij', 'snel'],
    prepMin: 10,
    cookMin: 20,
    servings: 2,
    difficulty: 'gemakkelijk',
    ingredients: [
      { qty: '2', name: 'zalmfilets (à 150 g)' },
      { qty: '250 g', name: 'broccoli, in roosjes' },
      { qty: '2', name: 'wortels, in reepjes' },
      { qty: '1', name: 'courgette, in plakken' },
      { qty: '2 el', name: 'olijfolie' },
      { qty: '1', name: 'citroen (halve, in partjes)' },
      { qty: '1 tl', name: 'gedroogde dille' },
      { qty: 'peper &', name: 'zout' },
    ],
    
    steps: [
      'Verwarm de oven voor op 200 °C.',
      'Meng de broccoliroosjes, wortelreepjes en courgette met olijfolie, peper en zout. Verdeel op een bakplaat en rooster 15 minuten.',
      'Leg de zalmfilets in het midden, besprenkel met citroen en bestrooi met dille.',
      'Schuif ook de zalm in de oven en gareer nog 8-10 minuten, afhankelijk van de dikte.',
      'Serveer de zalm met de geroosterde groenten en citroenpartjes.',
    ],
    variations: [
      {
        title: 'Met zoete aardappel',
        text: 'Voeg zoete aardappelpartjes toe (niet koolhydraatarm, wel heerlijk vullend).',
      },
      {
        title: 'Met couscous',
        text: 'Serveer met volkoren couscous voor een vullende maaltijd.',
      },
    ],
    tips: [
      'De zalm is gaar als het vlees makkelijk uit elkaar valt met een vork.',
      'Gebruik bakpapier op de bakplaat voor een makkelijkere schoonmaak.',
    ],
    nutrition: { kcal: 420, protein: 38, carbs: 16, fat: 24, fiber: 7 },
    imagePrompt:
      'Baked salmon fillet with roasted broccoli, carrots and zucchini on a sheet pan, lemon wedges, rustic healthy food photography, warm natural light, top-down',
  },

  {
    slug: 'kikkererwtencurry-met-spinazie',
    title: 'Romige kikkererwtencurry met spinazie',
    intro:
      'Een vullende, vegetarische curry met kikkererwten en spinazie in een romige tomatensaus. In 25 minuten klaar en heel makkelijk.',
    category: 'avondeten',
    tags: ['vegetarisch', 'vegan', 'gezond', 'snel'],
    prepMin: 10,
    cookMin: 15,
    servings: 4,
    difficulty: 'gemakkelijk',
    ingredients: [
      { qty: '2 blikken (400 g)', name: 'kikkererwten, uitgelekt' },
      { qty: '300 g', name: 'verse spinazie' },
      { qty: '1 blik', name: 'tomatenblokjes' },
      { qty: '1 blik (400 ml)', name: 'kokosmelk' },
      { qty: '1', name: 'ui, gesnipperd' },
      { qty: '2 tenen', name: 'knoflook' },
      { qty: '1 el', name: 'currypasta (of garam masala + kurkuma)' },
      { qty: '1 tl', name: 'komijn' },
      { qty: '1 tl', name: 'puur kurkuma' },
      { qty: 'peper &', name: 'zout' },
    ],
    
    steps: [
      'Fruit de ui en knoflook in een scheutje olie. Voeg currypasta, komijn en kurkuma toe en bak 1 minuut.',
      'Giet de tomatenblokjes en kokosmelk erbij en breng aan de kook.',
      'Voeg de kikkererwten toe en laat 10 minuten pruttelen.',
      'Roer de spinazie erdoor en laat slinken. Breng op smaak met peper en zout.',
      'Serveer met rijst of op zichzelf.',
    ],
    variations: [
      {
        title: 'Met rijst',
        text: 'Serveer met zilvervliesrijst of bloemkoolrijst voor een vullend gerecht.',
      },
      {
        title: 'Extra groenten',
        text: 'Voeg geroosterde bloemkool of paprikareepjes toe voor extra bite.',
      },
    ],
    tips: [
      'Deze curry is heerlijk om in te vriezen; maak een dubbele portie.',
      'Spinazie slinkt enorm, dus voeg ruim toe.',
    ],
    nutrition: { kcal: 360, protein: 15, carbs: 32, fat: 21, fiber: 12 },
    imagePrompt:
      'Creamy chickpea and spinach curry in a bowl with coconut milk, served with rice, garnished with fresh coriander, vibrant colors, warm natural light, food photography',
  },

  {
    slug: 'gehaktballetjes-in-tomatensaus-met-courgettepasta',
    title: 'Rundergehaktballetjes in tomatensaus met courgettepasta',
    intro:
      'Hollandse comfortfood in een koolhydraatarm jasje. Sappige gehaktballetjes in een rijke tomatensaus, geserveerd met courgettepasta.',
    category: 'avondeten',
    tags: ['gezond', 'koolhydraatarm', 'kindervriendelijk', 'glutenvrij'],
    prepMin: 15,
    cookMin: 25,
    servings: 4,
    difficulty: 'gemiddeld',
    ingredients: [
      { qty: '500 g', name: 'rundergehakt' },
      { qty: '1', name: 'ui, gesnipperd' },
      { qty: '1 ei', name: '' },
      { qty: '3 el', name: 'paneermeel (of amandelmeel)' },
      { qty: '2 tenen', name: 'knoflook' },
      { qty: '1 blik', name: 'tomatenblokjes' },
      { qty: '1 el', name: 'tomatenspiritus (puree)' },
      { qty: '1 tl', name: 'gedroogde oregano' },
      { qty: '2', name: 'courgettes, in noedels' },
      { qty: 'peper &', name: 'zout' },
    ],
    
    steps: [
      'Meng het gehakt met de ui, het ei, paneermeel, knoflook, peper en zout. Vorm kleine balletjes.',
      'Bak de balletjes in een ruime pan rondom bruin.',
      'Voeg tomatenspiritus, tomatenblokjes en oregano toe. Laat 20 minuten zachtjes pruttelen tot ze gaar zijn.',
      'Roerbak de courgettepasta 2 minuten in een scheutje olie.',
      'Serveer de gehaktballetjes met de saus over de courgettepasta.',
    ],
    variations: [
      {
        title: 'Met spaghetti',
        text: 'Serveer met volkorenspaghetti voor een vullende pastamaaltijd.',
      },
      {
        title: 'Vegetarisch',
        text: 'Gebruik vegetarisch gehakt in plaats van rundergehakt.',
      },
    ],
    tips: [
      'Laat de saus niet te droog koken; voeg eventueel een scheutje water toe.',
      'Maak een dubbele portie balletjes en vries de helft in.',
    ],
    nutrition: { kcal: 420, protein: 30, carbs: 18, fat: 26, fiber: 5 },
    imagePrompt:
      'Homemade Dutch meatballs in rich tomato sauce with zucchini noodles, rustic family dinner, warm cozy light, healthy comfort food photography, plated',
  },

  {
    slug: 'chocolade-bananenmuffins',
    title: 'Gezonde chocolade-bananenmuffins',
    intro:
      'Een verantwoorde zoetigheid zonder geraffineerde suiker. Deze muffins maken klaar met rijpe bananen en zitten vol vezels.',
    category: 'dessert',
    tags: ['gezond', 'vegetarisch'],
    prepMin: 15,
    cookMin: 20,
    servings: 12,
    difficulty: 'gemakkelijk',
    ingredients: [
      { qty: '3', name: 'rijpe bananen, geprakt' },
      { qty: '2', name: 'eieren' },
      { qty: '80 g', name: 'havermout (gemalen tot meel)' },
      { qty: '60 g', name: 'amandelmeel' },
      { qty: '1 tl', name: 'bakpoeder' },
      { qty: '2 el', name: 'cacaopoeder' },
      { qty: '2 el', name: 'honing of ahornsiroop' },
      { qty: '50 g', name: 'donkere chocolade, in stukjes' },
      { qty: 'snuf', name: 'zout' },
    ],
    
    steps: [
      'Verwarm de oven voor op 180 °C en bekleed een muffinvorm met papiertjes.',
      'Meng de geprakte banaan met de eieren en honing.',
      'Zeef de havermout, amandelmeel, bakpoeder, cacao en het zout erboven en meng tot een geheel.',
      'Spatel de chocoladestukjes erdoor.',
      'Verdeel het beslag over de vorm en bak 18-20 minuten, tot een satéprikker er schoon uitkomt.',
    ],
    variations: [
      {
        title: 'Glutenvrij',
        text: 'Gebruik gecertificeerd glutenvrije havermout en amandelmeel.',
      },
      {
        title: 'Zonder chocolade',
        text: 'Voeg walnoten toe in plaats van chocolade voor een crunchy variant.',
      },
    ],
    tips: [
      'Hoe rijper de banaan, hoe zoeter en minder honing heb je nodig.',
      'Bewaar de muffins 3 dagen in een luchtdichte trommel.',
    ],
    nutrition: { kcal: 155, protein: 5, carbs: 20, fat: 7, fiber: 3 },
    imagePrompt:
      'Healthy chocolate banana muffins on a cooling rack, visible chocolate chips, golden brown, rustic kitchen background, soft natural light, food photography',
  },

  {
    slug: 'linzensalade-met-feta-en-tomaat',
    title: 'Linzensalade met feta, tomaat en komkommer',
    intro:
      'Een vullende, eiwitrijke lunch in 15 minuten. Linzensalade met feta, cherrytomaatjes en komkommer, op smaak gebracht met citroen en munt. Idea voor meal prep.',
    category: 'lunch',
    tags: ['gezond', 'vegetarisch', 'snel', 'glutenvrij'],
    prepMin: 15,
    cookMin: 0,
    servings: 2,
    difficulty: 'gemakkelijk',
    ingredients: [
      { qty: '1 blik (400 g)', name: 'linzen, gespoeld' },
      { qty: '150 g', name: 'cherrytomaatjes, gehalveerd' },
      { qty: '1', name: 'komkommer, in blokjes' },
      { qty: '100 g', name: 'feta, verkruimeld' },
      { qty: 'handje', name: 'verse munt, fijngehakt' },
      { qty: '1', name: 'rode ui, in dunne ringen' },
      { qty: '2 el', name: 'citroensap' },
      { qty: '2 el', name: 'olijfolie' },
      { qty: 'peper &', name: 'zout' },
    ],
    steps: [
      'Doe de gespoelde linzen in een grote kom.',
      'Voeg tomaat, komkommer, rode ui en munt toe en meng.',
      'Besprenkel met citroensap en olijfolie, breng op smaak met peper en zout.',
      'Verdeel de feta erover en serveer direct.'
    ],
    variations: [
      { title: 'Extra eiwit', text: 'Voeg een blik kikkererwten toe of serveer met een gekookt ei erbij.' },
      { title: 'Zonder feta', text: 'Vervang feta door avocado-blokjes voor een vegan variant.' },
    ],
    tips: [
      'Maak een dubbele portie en gebruik de salade 2 dagen als lunch; bewaar afgedekt in de koelkast.',
      'De salade wordt alleen maar beter als hij 10 minuten staat.',
    ],
    nutrition: { kcal: 420, protein: 22, carbs: 45, fat: 18, fiber: 15 },
    imagePrompt:
      'Fresh lentil salad with feta, cherry tomatoes and cucumber in a white bowl, lemon mint dressing, bright natural light, healthy lunch food photography, top-down',
  },

  {
    slug: 'wrap-met-kip-en-crunchy-groente',
    title: 'Volkorenwrap met kip en crunchy groente',
    intro:
      'Een snelle, gezonde lunch die je in 10 minuten maakt. Volkorenwrap met gegrilde kip, boerenkool, paprika en een romige yoghurtsaus. Heerlijk voor op het werk.',
    category: 'lunch',
    tags: ['gezond', 'snel', 'kindervriendelijk'],
    prepMin: 10,
    cookMin: 0,
    servings: 1,
    difficulty: 'gemakkelijk',
    ingredients: [
      { qty: '1', name: 'volkorentortilla' },
      { qty: '100 g', name: 'gerookte kipfilet of gegrilde kip, in reepjes' },
      { qty: 'handje', name: 'boerenkool of rucola' },
      { qty: '½', name: 'paprika, in reepjes' },
      { qty: '¼', name: 'komkommer, in plakjes' },
      { qty: '2 el', name: 'griekse yoghurt' },
      { qty: '1 tl', name: 'citroensap' },
      { qty: '1 snuf', name: 'paprikapoeder' },
    ],
    steps: [
      'Meng de griekse yoghurt met citroensap en paprikapoeder tot een saus.',
      'Leg de tortilla op een bord en smeer de saus in het midden.',
      'Verdeel de kip, groente en de boerenkool over de saus.',
      'Vouw de wrap stevig op, snijd schuin doormidden en serveer.',
    ],
    variations: [
      { title: 'Vegetarisch', text: 'Vervang de kip door falafel of gerookte tofu voor een vega wrap.' },
      { title: 'Extra gebakken', text: 'Grill de wrap kort in een koekenpan voor een krokante buitenkant.' },
    ],
    tips: [
      'Kies krokante groente zodat de wrap lekker knapperig blijft.',
      'Maak de saus ook lekker voor in een broodje of salade.',
    ],
    nutrition: { kcal: 385, protein: 34, carbs: 42, fat: 10, fiber: 8 },
    imagePrompt:
      'Whole wheat wrap filled with grilled chicken and crunchy vegetables on a wooden board, yogurt sauce inside, fresh and healthy lunch, bright daylight food photography',
  },

  {
    slug: 'zoete-aardappelsoep-met-kokos',
    title: 'Zoete aardappelsoep met kokosmelk en gember',
    intro:
      'Een romige, verwarmende soep die klaar is in 30 minuten. Zoete aardappel met kokosmelk, gember en een vleugje kaneel. Perfect voor een koude winteravond.',
    category: 'soep',
    tags: ['gezond', 'vegetarisch', 'glutenvrij'],
    prepMin: 10,
    cookMin: 20,
    servings: 4,
    difficulty: 'gemakkelijk',
    ingredients: [
      { qty: '600 g', name: 'zoete aardappel, in blokjes' },
      { qty: '1 blik (400 ml)', name: 'kokosmelk' },
      { qty: '1', name: 'ui, gesnipperd' },
      { qty: '2 tenen', name: 'knoflook, fijngehakt' },
      { qty: '1 el', name: 'gember, geraspt' },
      { qty: '500 ml', name: 'groentebouillon' },
      { qty: '½ tl', name: 'kaneel' },
      { qty: '1 el', name: 'olijfolie' },
      { qty: 'peper &', name: 'zout' },
      { qty: 'handje', name: 'pompoenpitten (garnering)' },
    ],
    steps: [
      'Fruit de ui, knoflook en gember in olijfolie tot glazig.',
      'Voeg de zoete aardappel en kaneel toe en bak 2 minuten mee.',
      'Giet de bouillon erbij, breng aan de kook en laat 15 minuten zachtjes koken tot de zoete aardappel gaar is.',
      'Pureer de soep met een staafmixer fijn.',
      'Roer de kokosmelk erdoor en warm nog 2 minuten door.',
      'Breng op smaak met peper en zout en garneer met pompoenpitten.',
    ],
    variations: [
      { title: 'Zonder kokos', text: 'Vervang kokosmelk door wat extra bouillon en een scheutje room voor een lichtere soep.' },
      { title: 'Extra pittig', text: 'Voeg een rode peper of chilivlokken toe bij het fruiten.' },
    ],
    tips: [
      'Pompsoep is ook ideaal om in te vriezen in porties voor een snelle doordeweekse maaltijd.',
      'Serveer met een geroosterde boterham voor een vullende maaltijdsoep.',
    ],
    nutrition: { kcal: 260, protein: 5, carbs: 34, fat: 12, fiber: 7 },
    imagePrompt:
      'Creamy sweet potato coconut soup in a bowl, garnished with pumpkin seeds and a swirl of coconut cream, warm cosy winter light, food photography',
  },

  {
    slug: 'griekse-koeksalade-met-kikkererwten',
    title: 'Griekse salade met kikkererwten en feta',
    intro:
      'Een klassieke Griekse salade met een twist: kikkererwten voor extra eiwit en verzadiging. Fris, kleurrijk en in 15 minuten klaar.',
    category: 'salade',
    tags: ['gezond', 'vegetarisch', 'glutenvrij', 'snel'],
    prepMin: 15,
    cookMin: 0,
    servings: 3,
    difficulty: 'gemakkelijk',
    ingredients: [
      { qty: '1 blik (400 g)', name: 'kikkererwten, gespoeld' },
      { qty: '2', name: 'komkommers, in halve maantjes' },
      { qty: '250 g', name: 'cherrytomaatjes, gehalveerd' },
      { qty: '1', name: 'rode ui, in dunne ringen' },
      { qty: '½', name: 'groene paprika, in blokjes' },
      { qty: '100 g', name: 'feta, in blokjes' },
      { qty: 'handje', name: 'zwarte olijven' },
      { qty: '2 el', name: 'citroensap' },
      { qty: '2 el', name: 'olijfolie' },
      { qty: '1 tl', name: 'gedroogde oregano' },
      { qty: 'peper &', name: 'zout' },
    ],
    steps: [
      'Doe de kikkererwten, komkommer, tomaat, rode ui en paprika in een grote kom.',
      'Voeg olijven en feta toe.',
      'Klop citroensap, olijfolie, oregano, peper en zout tot een dressing.',
      'Meng de dressing door de salade en serveer.',
    ],
    variations: [
      { title: 'Extra verzadiging', text: 'Voeg gegrilde kip of een blikje tonijn toe voor een volledige maaltijd.' },
      { title: 'Vegan', text: 'Laat de feta weg en voeg avocado toe.' },
    ],
    tips: [
      'Kruid de kikkererwten met wat paprikapoeder voor extra smaak.',
      'Deze salade blijft 1 dag goed in de koelkast; voeg de dressing pas vlak voor serveren toe.',
    ],
    nutrition: { kcal: 340, protein: 14, carbs: 38, fat: 16, fiber: 12 },
    imagePrompt:
      'Vibrant Greek salad with chickpeas, feta, olives, cucumber and cherry tomatoes in a bowl, oregano dressing, fresh summer colours, overhead food photography',
  },

  {
    slug: 'volkoren-pannenkoeken-met-banaan',
    title: 'Volkoren pannenkoeken met banaan',
    intro:
      'Een gezond en kindvriendelijk ontbijt of brunch in 20 minuten. Fluffy volkoren pannenkoeken met banaan, zonder toegevoegde suiker. De perfecte start van het weekend.',
    category: 'ontbijt',
    tags: ['gezond', 'vegetarisch', 'kindervriendelijk'],
    prepMin: 8,
    cookMin: 12,
    servings: 4,
    difficulty: 'gemakkelijk',
    ingredients: [
      { qty: '150 g', name: 'volkorenmeel' },
      { qty: '1', name: 'rijpe banaan, geprakt' },
      { qty: '2', name: 'eieren' },
      { qty: '250 ml', name: '(plantaardige) melk' },
      { qty: '1 tl', name: 'bakpoeder' },
      { qty: '1 snuf', name: 'kaneel' },
      { qty: '1 el', name: 'olie of boter, om te bakken' },
      { qty: 'honing of', name: 'vers fruit (topping)' },
    ],
    steps: [
      'Meng volkorenmeel, bakpoeder en kaneel in een kom.',
      'Klop de eieren, melk en geprakte banaan erdoor tot een glad beslag.',
      'Verhit een klontje boter of olie in een koekenpan.',
      'Schep kleine porties beslag in de pan en bak de pannenkoekjes aan beide kanten goudbruin.',
      'Serveer met honing of vers fruit.',
    ],
    variations: [
      { title: 'Vegan', text: 'Gebruik banaan als ei-vervanger en plantaardige melk.' },
      { title: 'Extra eiwit', text: 'Voeg een schep whey eiwitpoeder aan het beslag toe.' },
    ],
    tips: [
      'Hoe rijper de banaan, hoe zoeter en smaakvoller de pannenkoek.',
      'Hou de pannenkoekjes warm in een oven op 100 °C terwijl je de rest bakt.',
    ],
    nutrition: { kcal: 220, protein: 9, carbs: 36, fat: 5, fiber: 5 },
    imagePrompt:
      'Stack of fluffy whole wheat banana pancakes on a plate, topped with sliced banana and honey, fresh berries, bright morning light, breakfast food photography',
  },

  {
    slug: 'ovengroente-salade-met-feta',
    title: 'Geroosterde groente-salade met feta en walnoten',
    intro:
      'Een warme salade met geroosterde seizoensgroente, verkruimelde feta en geroosterde walnoten. Heerlijk als licht avondeten of voedzame lunch.',
    category: 'salade',
    tags: ['gezond', 'vegetarisch', 'glutenvrij'],
    prepMin: 10,
    cookMin: 25,
    servings: 3,
    difficulty: 'gemakkelijk',
    ingredients: [
      { qty: '1', name: 'paksoi of broccoli, in roosjes' },
      { qty: '2', name: 'courgettes, in halve maantjes' },
      { qty: '1', name: 'zoete aardappel, in blokjes' },
      { qty: '150 g', name: 'feta, verkruimeld' },
      { qty: 'handje', name: 'walnoten, grof gehakt' },
      { qty: '1 el', name: 'olijfolie' },
      { qty: '1 el', name: 'balsamico-azijn' },
      { qty: '1 tl', name: 'gedroogde tijm' },
      { qty: 'peper &', name: 'zout' },
    ],
    steps: [
      'Verwarm de oven voor op 200 °C.',
      'Meng de groente met olijfolie, tijm, peper en zout en spreid uit over een bakplaat.',
      'Rooster de groente 20-25 minuten tot ze zacht en licht gekleurd zijn.',
      'Rooster ondertussen de walnoten kort in een droge koekenpan.',
      'Verdeel de geroosterde groente over borden, verkruimel de feta erover en strooi de walnoten en balsamico erover.',
    ],
    variations: [
      { title: 'Extra proteïne', text: 'Serveer met gegrilde kip of een gekookt ei erbij voor een volledige maaltijd.' },
      { title: 'Zonder feta', text: 'Laat de feta weg voor een vegan variant, voeg avocado toe.' },
    ],
    tips: [
      'Snijd de groente in gelijke blokjes zodat ze gelijkmatig garen.',
      'Kies groente van het seizoen voor de beste smaak en een lagere prijs.',
    ],
    nutrition: { kcal: 330, protein: 12, carbs: 30, fat: 19, fiber: 9 },
    imagePrompt:
      'Roasted vegetable salad with feta and walnuts in a rustic bowl, caramelized vegetables with balsamic drizzle, warm hearty colours, food photography',
  },
];

export const recipeBySlug = (slug: string): RecipeMeta | undefined =>
  recipes.find((r) => r.slug === slug);

export const featuredRecipes = (): RecipeMeta[] => recipes.filter((r) => r.featured);

export const recipesByCategory = (cat: RecipeMeta['category']) =>
  recipes.filter((r) => r.category === cat);

export const recipesByTag = (tag: RecipeMeta['tags'][number]) =>
  recipes.filter((r) => r.tags.includes(tag));