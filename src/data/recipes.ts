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

  {
    slug: 'eiwitrijke-omelet-met-spinazie-en-feta',
    title: 'Eiwitrijke omelet met spinazie en feta',
    intro:
      'Een eiwitrijk, koolhydraatarm ontbijt dat in 10 minuten klaar is. Met spinazie, cherrytomaatjes en romige feta. Perfect voor een stevige start van de dag.',
    category: 'ontbijt',
    tags: ['gezond', 'vegetarisch', 'glutenvrij', 'snel'],
    prepMin: 5,
    cookMin: 8,
    servings: 1,
    difficulty: 'gemakkelijk',
    ingredients: [
      { qty: '3', name: 'eieren' },
      { qty: '1 el', name: 'water' },
      { qty: '2 handjes', name: 'verse spinazie' },
      { qty: '40 g', name: 'feta, verkruimeld' },
      { qty: '6', name: 'cherrytomaatjes, gehalveerd' },
      { qty: '1 tl', name: 'olijfolie' },
      { qty: 'peper &', name: 'zout' },
    ],
    steps: [
      'Klop de eieren los met het water, peper en zout.',
      'Verhit de olijfolie in een koekenpan en laat de spinazie in 1 minuut slinken.',
      'Schenk het ei over de spinazie en verdeel de tomaatjes erover. Bak op middelhoog vuur tot de onderkant stevig is.',
      'Vouw de omelet dubbel, verkruimel de feta erover en bak nog 1 minuut.',
      'Laat de omelet met de deksel erop nog 1 minuut garen voor een romige binnenkant en serveer direct.',
    ],
    variations: [
      { title: 'Extra vulling', text: 'Voeg 100 g gegrilde kipreepjes of wat champignons toe aan de spinazie.' },
      { title: 'Vegan', text: 'Vervang de eieren door een plantaardig ei-alternatief en laat de feta weg; voeg avocado toe.' },
    ],
    tips: [
      'Klop een scheutje water door de eieren; dat maakt de omelet luchtiger.',
      'Verwarm de pan goed voordat de eieren erin gaan; zo plakt de omelet niet.',
    ],
    nutrition: { kcal: 320, protein: 28, carbs: 6, fat: 21, fiber: 2 },
    imagePrompt:
      'High protein spinach and feta omelet with cherry tomatoes folded on a white plate, bright morning kitchen light, healthy Dutch breakfast food photography, top-down',
  },

  {
    slug: 'chiapudding-met-vanille-en-blauwe-bessen',
    title: 'Chiapudding met vanille en blauwe bessen',
    intro:
      'Een glutenvrij, vezelrijk ontbijt dat je de avond van tevoren klaarmaakt. Romige chiapudding met vanillesmaak en blauwe bessen, zonder toegevoegde suiker.',
    category: 'ontbijt',
    tags: ['gezond', 'vegan', 'glutenvrij', 'snel'],
    prepMin: 10,
    cookMin: 0,
    servings: 2,
    difficulty: 'gemakkelijk',
    ingredients: [
      { qty: '60 g', name: 'chiazaad' },
      { qty: '400 ml', name: '(plantaardige) melk' },
      { qty: '1 el', name: 'ahornsiroop' },
      { qty: '1 tl', name: 'vanille-extract' },
      { qty: '150 g', name: 'blauwe bessen' },
      { qty: '2 el', name: 'ongezogen kokosvlokken (optioneel)' },
    ],
    steps: [
      'Meng het chiazaad, de melk, ahornsiroop en vanille in een kom.',
      'Laat 5 minuten staan en roer nogmaals zodat de zaden niet klonteren.',
      'Roer de helft van de blauwe bessen erdoor, dek af en zet minstens 4 uur of een nacht in de koelkast.',
      'Schep de pudding om en verdeel de overige blauwe bessen en kokosvlokken erover.',
    ],
    variations: [
      { title: 'Extra eiwit', text: 'Voeg een schep plantaardig eiwitpoeder toe voor een eiwitrijker ontbijt.' },
      { title: 'Zoeter', text: 'Voeg wat extra ahornsiroop of een paar dadels toe, of gebruik rijpere bessen.' },
    ],
    tips: [
      'Chiazaad absorbeert veel vocht; voeg extra melk toe als de pudding te dik wordt.',
      'Gebruik een jampotje met deksel voor een makkelijke on-the-go versie.',
    ],
    nutrition: { kcal: 340, protein: 12, carbs: 34, fat: 18, fiber: 15 },
    imagePrompt:
      'Creamy vanilla chia pudding in a glass jar with fresh blueberries and coconut flakes on top, bright minimal healthy breakfast styling, natural morning light',
  },

  {
    slug: 'groene-smoothie-bowl-met-banaan-en-spinazie',
    title: 'Groene smoothie bowl met banaan en spinazie',
    intro:
      'Een frisse, vegan smoothie bowl vol groenten en fruit met een vleugje gember. In 5 minuten klaar en rijk aan vezels en vitamines.',
    category: 'ontbijt',
    tags: ['gezond', 'vegan', 'glutenvrij', 'snel'],
    prepMin: 5,
    cookMin: 0,
    servings: 1,
    difficulty: 'gemakkelijk',
    ingredients: [
      { qty: '1', name: 'rijpe banaan, in stukken' },
      { qty: '2 handjes', name: 'verse spinazie' },
      { qty: '1/2', name: 'komkommer, in blokjes' },
      { qty: '1 tl', name: 'gember, geraspt' },
      { qty: '100 ml', name: '(plantaardige) melk of water' },
      { qty: '1 el', name: 'pompoenpitten (topping)' },
      { qty: '1/2', name: 'appel, in partjes (topping)' },
    ],
    steps: [
      'Doe de banaan, spinazie, komkommer, gember en melk in een blender en pureer glad.',
      'Voeg eventueel ijsblokjes of extra melk toe tot de gewenste dikte.',
      'Schep de smoothie in een kom en garneer met pompoenpitten en appelpartjes.',
      'Eet de bowl met een lepel, direct na bereiding.',
    ],
    variations: [
      { title: 'Eiwitrijk', text: 'Voeg een schep plantaardig proteïnepoeder toe voor extra eiwitten.' },
      { title: 'Zoeter', text: 'Voeg een paar dadels of een banaan extra toe in plaats van suiker.' },
    ],
    tips: [
      'Vries de banaan in plakken in voor een dikke, romige bowl.',
      'Bewaar een lepel van de bowl als inspiratie voor je eigen toppings; noten, zaden en fruit werken goed.',
    ],
    nutrition: { kcal: 230, protein: 8, carbs: 40, fat: 6, fiber: 9 },
    imagePrompt:
      'Green smoothie bowl with banana, spinach and cucumber topped with pumpkin seeds and apple slices, vibrant green, fresh vegan breakfast, overhead bright food styling',
  },

  {
    slug: 'tonijn-avocadosalade-met-citroen',
    title: 'Tonijn-avocadosalade met citroen',
    intro:
      'Een snelle, eiwitrijke lunch zonder brood. Romige tonijn-avocadosalade op een bedje van rucola, met citroen en lente-ui. Koolhydraatarm en glutenvrij.',
    category: 'lunch',
    tags: ['gezond', 'glutenvrij', 'snel'],
    prepMin: 10,
    cookMin: 0,
    servings: 2,
    difficulty: 'gemakkelijk',
    ingredients: [
      { qty: '1 blik (160 g)', name: 'tonijn op water, uitgelekt' },
      { qty: '1', name: 'rijpe avocado' },
      { qty: '2 el', name: 'magere Griekse yoghurt' },
      { qty: '1 el', name: 'citroensap' },
      { qty: '1/2', name: 'lente-ui, fijngehakt' },
      { qty: 'handje', name: 'verse peterselie, fijngehakt' },
      { qty: '100 g', name: 'rucola' },
      { qty: 'peper &', name: 'zout' },
    ],
    steps: [
      'Prak de avocado grof in een kom.',
      'Meng de tonijn, yoghurt, het citroensap, de lente-ui en peterselie erdoor.',
      'Breng op smaak met peper en zout.',
      'Leg de rucola op twee borden en schep de tonijn-avocadosalade erop.',
    ],
    variations: [
      { title: 'Extra groente', text: 'Voeg komkommer of paprika in blokjes toe voor extra crunch.' },
      { title: 'Met cracker', text: 'Serveer met glutenvrije rijstwafels voor een stevigere lunch.' },
    ],
    tips: [
      'Kies tonijn op water in plaats van op olie voor een magere, lagere calorie-inname.',
      'Druppel meteen citroensap over de avocado zodat hij niet verkleurt.',
    ],
    nutrition: { kcal: 300, protein: 25, carbs: 10, fat: 19, fiber: 7 },
    imagePrompt:
      'Fresh tuna avocado salad with lemon on a bed of rocket leaves in a white bowl, bright natural light, healthy high protein lunch food photography, top-down',
  },

  {
    slug: 'sushi-bowl-met-zalm-en-avocado',
    title: 'Sushi bowl met zalm, avocado en rijst',
    intro:
      'Alle smaken van sushi, maar dan in een makkelijke kom. Met gerookte zalm, avocado, komkommer en een frisse sessamdressing. Eiwitrijk en glutenvrij.',
    category: 'lunch',
    tags: ['gezond', 'glutenvrij'],
    prepMin: 20,
    cookMin: 15,
    servings: 2,
    difficulty: 'gemakkelijk',
    ingredients: [
      { qty: '150 g', name: 'sushirijst of zilvervliesrijst' },
      { qty: '150 g', name: 'gerookte zalm, in reepjes' },
      { qty: '1', name: 'avocado, in blokjes' },
      { qty: '1/2', name: 'komkommer, in dunne reepjes' },
      { qty: '1', name: 'wortel, in julienne' },
      { qty: '1 el', name: 'sojasaus (glutenvrij of tamari)' },
      { qty: '1 tl', name: 'sesamolie' },
      { qty: '1 tl', name: 'geroosterd sesamzaad' },
      { qty: '1/2', name: 'limoen (sap)' },
    ],
    steps: [
      'Kook de rijst volgens de aanwijzingen op de verpakking en laat iets afkoelen.',
      'Verdeel de rijst over twee kommen.',
      'Schik de zalm, avocado, komkommer en wortel mooi bovenop de rijst.',
      'Klop de sojasaus, sesamolie en het limoensap tot een dressing en schenk erover.',
      'Bestrooi met geroosterde sesamzaadjes en serveer direct.',
    ],
    variations: [
      { title: 'Vegetarisch', text: 'Vervang de zalm door gebakken tofu voor een vegetarische versie.' },
      { title: 'Extra knapperig', text: 'Voeg stukjes nori of komkommer toe voor extra bite.' },
    ],
    tips: [
      'Gebruik sushi-azijn door de warme rijst voor een echte sushismaak.',
      'Serveer de kom koud; bewaar restjes afgedekt in de koelkast en eet dezelfde dag op.',
    ],
    nutrition: { kcal: 480, protein: 28, carbs: 55, fat: 18, fiber: 7 },
    imagePrompt:
      'Sushi bowl with smoked salmon, avocado, cucumber and carrot over rice in a bowl, sesame seeds and drizzle, vibrant fresh Japanese inspired food photography, overhead',
  },

  {
    slug: 'kip-boerenkoolsalade',
    title: 'Warme kip-boerenkoolsalade met druiven en walnoten',
    intro:
      'Een voedzame, eiwitrijke lunchsalade met zachte boerenkool, gebakken kip, zoete druiven en geroosterde walnoten in een frisse mosterd-dressing.',
    category: 'lunch',
    tags: ['gezond', 'glutenvrij'],
    prepMin: 15,
    cookMin: 10,
    servings: 2,
    difficulty: 'gemakkelijk',
    ingredients: [
      { qty: '200 g', name: 'kipfilet, in reepjes' },
      { qty: '200 g', name: 'jonge boerenkool' },
      { qty: '100 g', name: 'druiven, gehalveerd' },
      { qty: '2 el', name: 'walnoten, grof gehakt' },
      { qty: '3 el', name: 'magere Griekse yoghurt' },
      { qty: '1 tl', name: 'mosterd' },
      { qty: '1 el', name: 'citroensap' },
      { qty: '1 el', name: 'olijfolie' },
      { qty: 'peper &', name: 'zout' },
    ],
    steps: [
      'Verhit de olijfolie in een pan en bak de kipreepjes goudbruin en gaar. Breng op smaak met peper en zout.',
      'Blancheer de boerenkool 2 minuten in kokend water en laat goed uitlekken.',
      'Rooster de walnoten kort in een droge koekenpan.',
      'Klop de yoghurt, mosterd en het citroensap tot een dressing.',
      'Meng de boerenkool met de warme kip, druiven, walnoten en dressing. Serveer lauwwarm.',
    ],
    variations: [
      { title: 'Vegan', text: 'Vervang de kip door geroosterde kikkererwten en de yoghurt door een plantaardige variant.' },
      { title: 'Extra vulling', text: 'Voeg gekookte quinoa toe voor een complete maaltijd.' },
    ],
    tips: [
      'Masseer jonge boerenkool even met wat olijfolie voor een zachtere structuur.',
      'Druiven in de salade geven een zoete tegenhanger aan de hartige kip.',
    ],
    nutrition: { kcal: 390, protein: 34, carbs: 22, fat: 20, fiber: 6 },
    imagePrompt:
      'Warm kale and roasted chicken salad with grapes and walnuts in a bowl, yoghurt mustard dressing, cozy healthy lunch, warm natural light, food photography',
  },

  {
    slug: 'gegrilde-kip-met-bloemkoolrijst-en-groenten',
    title: 'Gegrilde kip met bloemkoolrijst en geroosterde groenten',
    intro:
      'Een koolhydraatarme, eiwitrijke maaltijd met gegrilde kip, bloemkoolrijst en geroosterde paprika en courgette. In 25 minuten op tafel.',
    category: 'avondeten',
    tags: ['gezond', 'koolhydraatarm', 'glutenvrij', 'snel'],
    prepMin: 10,
    cookMin: 18,
    servings: 2,
    difficulty: 'gemakkelijk',
    ingredients: [
      { qty: '2', name: 'kipfilets (à 160 g)' },
      { qty: '1', name: 'bloemkool, in fijne rijst' },
      { qty: '1', name: 'courgette, in blokjes' },
      { qty: '1', name: 'paprika, in reepjes' },
      { qty: '1 el', name: 'olijfolie' },
      { qty: '1 tl', name: 'paprikapoeder' },
      { qty: '1/2 tl', name: 'knoflookpoeder' },
      { qty: 'peper &', name: 'zout' },
    ],
    steps: [
      'Verwarm de oven voor op 200 °C.',
      'Meng de courgette en paprika met olijfolie, peper en zout en verdeel ze over een bakplaat. Rooster 15 minuten.',
      'Kruid de kipfilets met paprikapoeder, knoflookpoeder, peper en zout en leg ze de laatste 10-12 minuten bij de groenten op de plaat.',
      'Rasp de bloemkool tot fijne rijst en roerbak 5 minuten in een scheutje olie tot zacht.',
      'Serveer de kip met de bloemkoolrijst en de geroosterde groenten.',
    ],
    variations: [
      { title: 'Vullend', text: 'Vervang de bloemkoolrijst door zilvervliesrijst voor extra koolhydraten.' },
      { title: 'Extra groente', text: 'Voeg broccoli of sugarsnaps toe aan de bakplaat.' },
    ],
    tips: [
      'Bak de bloemkoolrijst niet te lang, anders wordt hij waterig.',
      'Laat de kip 5 minuten rusten onder aluminiumfolie voor extra sappigheid.',
    ],
    nutrition: { kcal: 380, protein: 42, carbs: 18, fat: 16, fiber: 8 },
    imagePrompt:
      'Grilled chicken breast with cauliflower rice and roasted peppers and courgette on a white plate, healthy low carb dinner, bright natural light, food photography',
  },

  {
    slug: 'roerbak-met-garnalen-en-groenten',
    title: 'Pittige roerbak met garnalen en groenten',
    intro:
      'Een snelle, eiwitrijke roerbak met garnalen, paprika, sugarsnaps en sesam. Koolhydraatarm en glutenvrij. In 15 minuten klaar.',
    category: 'avondeten',
    tags: ['gezond', 'koolhydraatarm', 'glutenvrij', 'snel'],
    prepMin: 10,
    cookMin: 12,
    servings: 2,
    difficulty: 'gemakkelijk',
    ingredients: [
      { qty: '250 g', name: 'garnalen, gepeld' },
      { qty: '1', name: 'paprika, in reepjes' },
      { qty: '150 g', name: 'sugarsnaps' },
      { qty: '1/2', name: 'ui, in halve ringen' },
      { qty: '2 tenen', name: 'knoflook, gesnipperd' },
      { qty: '1 tl', name: 'gember, geraspt' },
      { qty: '1 el', name: 'sojasaus (glutenvrij of tamari)' },
      { qty: '1 tl', name: 'sesamolie' },
      { qty: '1 el', name: 'olijfolie' },
      { qty: '1 tl', name: 'sesamzaad (garnering)' },
    ],
    steps: [
      'Verhit de olijfolie en roerbak de ui, knoflook en gember 1 minuut.',
      'Voeg de paprika en sugarsnaps toe en roerbak 3-4 minuten op hoog vuur, beetgaar.',
      'Voeg de garnalen toe en bak 3-4 minuten tot ze roze en gaar zijn.',
      'Blus af met de sojasaus en sesamolie en meng goed door.',
      'Bestrooi met sesamzaad en serveer direct.',
    ],
    variations: [
      { title: 'Met rijst', text: 'Serveer met zilvervliesrijst of bloemkoolrijst voor een vullend gerecht.' },
      { title: 'Vegan', text: 'Vervang de garnalen door blokjes tofu en bak ze knapperig.' },
    ],
    tips: [
      'Bak garnalen kort; ze worden taai als ze te lang garen.',
      'Bereid alle ingrediënten van tevoren, want roerbak gaat snel.',
    ],
    nutrition: { kcal: 265, protein: 30, carbs: 14, fat: 11, fiber: 5 },
    imagePrompt:
      'Stir fried prawns with peppers and sugar snap peas in a wok, glazed with soy and sesame, bright fresh colors, healthy quick dinner, food photography top-down',
  },

  {
    slug: 'biefstukreepjes-met-paddenstoelen-en-sperziebonen',
    title: 'Biefstukreepjes met paddenstoelen en sperziebonen',
    intro:
      'Een koolhydraatarme, eiwitrijke maaltijd met malse biefstukreepjes, gebakken champignons en sperziebonen. Smaakvol en in 20 minuten klaar.',
    category: 'avondeten',
    tags: ['gezond', 'koolhydraatarm', 'glutenvrij'],
    prepMin: 10,
    cookMin: 15,
    servings: 2,
    difficulty: 'gemiddeld',
    ingredients: [
      { qty: '300 g', name: 'runderbiefstuk, in reepjes' },
      { qty: '200 g', name: 'kastanjechampignons, in plakjes' },
      { qty: '250 g', name: 'sperziebonen, schoongemaakt' },
      { qty: '1 el', name: 'olijfolie' },
      { qty: '1/2', name: 'ui, in ringen' },
      { qty: '2 tenen', name: 'knoflook' },
      { qty: '1 tl', name: 'gedroogde tijm' },
      { qty: '1 el', name: 'sojasaus (glutenvrij, optioneel)' },
      { qty: 'peper &', name: 'zout' },
    ],
    steps: [
      'Kook de sperziebonen 6-8 minuten beetgaar in licht gezouten water en giet af.',
      'Verhit de olijfolie en bak de biefstukreepjes op hoog vuur 2-3 minuten goudbruin. Haal ze uit de pan.',
      'Bak in dezelfde pan de ui, knoflook en champignons 5 minuten. Kruid met tijm, peper en zout.',
      'Voeg de biefstukreepjes en eventueel de sojasaus toe en warm 1 minuut door.',
      'Serveer de biefstukreepjes met de sperziebonen.',
    ],
    variations: [
      { title: 'Romig', text: 'Voeg een scheutje kookroom toe aan de paddenstoelen voor een romige saus.' },
      { title: 'Met aardappel', text: 'Serveer met gekookte krieltjes voor een vullende maaltijd.' },
    ],
    tips: [
      'Laat de biefstuk op kamertemperatuur komen voordat je hem bakt voor een mooi roze midden.',
      'Bak op hoog vuur; zo houd je het vlees mals.',
    ],
    nutrition: { kcal: 350, protein: 40, carbs: 12, fat: 17, fiber: 6 },
    imagePrompt:
      'Beef strips with sautéed mushrooms and green beans on a plate, juicy medium rare beef, rustic healthy dinner, warm natural light, food photography',
  },

  {
    slug: 'kabeljauw-met-geroosterde-cherrytomaat-en-courgette',
    title: 'Kabeljauw met geroosterde cherrytomaat en courgette',
    intro:
      'Een lichte, eiwitrijke maaltijd met zachte kabeljauw, zoete geroosterde tomaatjes en courgette uit de oven. Glutenvrij en in 25 minuten klaar.',
    category: 'avondeten',
    tags: ['gezond', 'glutenvrij'],
    prepMin: 10,
    cookMin: 20,
    servings: 2,
    difficulty: 'gemakkelijk',
    ingredients: [
      { qty: '2', name: 'kabeljauwfilets (à 150 g)' },
      { qty: '250 g', name: 'cherrytomaatjes, gehalveerd' },
      { qty: '1', name: 'courgette, in halve maantjes' },
      { qty: '1 el', name: 'olijfolie' },
      { qty: '2 tenen', name: 'knoflook, in plakjes' },
      { qty: '1 tl', name: 'gedroogde oregano' },
      { qty: '1/2', name: 'citroen (sap)' },
      { qty: 'handje', name: 'verse basilicum' },
      { qty: 'peper &', name: 'zout' },
    ],
    steps: [
      'Verwarm de oven voor op 200 °C.',
      'Meng de tomaatjes, courgette en knoflook met de olijfolie en oregano en verdeel over een ovenschaal. Rooster 10 minuten.',
      'Leg de kabeljauwfilets erop, bestrooi met peper en zout en besprenkel met citroensap.',
      'Zet de schaal nog 10 minuten in de oven, tot de vis uit elkaar valt.',
      'Garneer met verse basilicum en serveer direct.',
    ],
    variations: [
      { title: 'Extra groente', text: 'Voeg paprika of broccoli toe aan de ovenschotel.' },
      { title: 'Met zoete aardappel', text: 'Rooster zoete aardappelblokjes mee voor een vullend gerecht.' },
    ],
    tips: [
      'Kabeljauw is klaar als het vlees makkelijk uit elkaar valt met een vork.',
      'Besprenkel de vis met citroen om de smaak te versterken.',
    ],
    nutrition: { kcal: 285, protein: 34, carbs: 12, fat: 12, fiber: 4 },
    imagePrompt:
      'Baked cod fish fillet with roasted cherry tomatoes and courgette in an oven dish, garnished with fresh basil, light healthy dinner, warm natural light, food photography',
  },

  {
    slug: 'lichte-kippensoep-met-groenten',
    title: 'Lichte kippensoep met veel groenten',
    intro:
      'Een heldere, eiwitrijke kippensoep boordevol groenten en zonder gluten. Ijzersterk voor een lichte, gezonde maaltijd of als opkikker bij een verkoudheid.',
    category: 'soep',
    tags: ['gezond', 'glutenvrij'],
    prepMin: 15,
    cookMin: 30,
    servings: 4,
    difficulty: 'gemakkelijk',
    ingredients: [
      { qty: '300 g', name: 'kipfilet, in blokjes' },
      { qty: '1,5 liter', name: 'kippenbouillon (zonder gluten)' },
      { qty: '2', name: 'wortels, in halve plakjes' },
      { qty: '1 stengel', name: 'bleekselderij, in boogjes' },
      { qty: '1', name: 'prei, in halve ringen' },
      { qty: '1/2', name: 'ui, gesnipperd' },
      { qty: '2 tenen', name: 'knoflook' },
      { qty: '1', name: 'laurierblaadje' },
      { qty: '1 tl', name: 'gedroogde tijm' },
      { qty: 'peper &', name: 'zout' },
    ],
    steps: [
      'Kook de kipfilet 15 minuten in de bouillon met het laurierblaadje. Vis de kip eruit, laat iets afkoelen en trek in blokjes.',
      'Fruit de ui en knoflook in een scheutje olie en voeg daarna wortel, prei en bleekselderij toe. Roerbak 3 minuten.',
      'Giet de bouillon terug en laat 15 minuten zachtjes pruttelen.',
      'Voeg de kip en tijm toe en warm nog 5 minuten door. Breng op smaak met peper en zout.',
    ],
    variations: [
      { title: 'Extra vulling', text: 'Voeg glutenvrije noedels of extra groenten toe voor een stevigere maaltijdsoep.' },
      { title: 'Met ei', text: 'Serveer met een gehalveerd gekookt ei erin.' },
    ],
    tips: [
      'Verwijder het laurierblaadje voor het serveren.',
      'Deze soep blijft 3 dagen goed in de koelkast; vries de rest per portie in.',
    ],
    nutrition: { kcal: 160, protein: 24, carbs: 12, fat: 4, fiber: 3 },
    imagePrompt:
      'Clear chicken soup with fresh vegetables like carrot, leek and celery in a white bowl, steam rising, light and healthy, warm cozy light, food photography',
  },

  {
    slug: 'romige-tomaten-linzensoep',
    title: 'Romige tomaten-linzensoep',
    intro:
      'Een vullende, vegetarische soep van tomaten en rode linzen, romig gemaakt zonder room. Boordevol eiwitten en vezels. Glutenvrij en makkelijk in te vriezen.',
    category: 'soep',
    tags: ['gezond', 'vegetarisch', 'glutenvrij'],
    prepMin: 10,
    cookMin: 25,
    servings: 4,
    difficulty: 'gemakkelijk',
    ingredients: [
      { qty: '200 g', name: 'rode linzen, gespoeld' },
      { qty: '1 blik (400 g)', name: 'tomatenblokjes' },
      { qty: '750 ml', name: 'groentebouillon' },
      { qty: '1', name: 'ui, gesnipperd' },
      { qty: '2 tenen', name: 'knoflook' },
      { qty: '1', name: 'wortel, in blokjes' },
      { qty: '1 tl', name: 'komijn' },
      { qty: '1/2 tl', name: 'paprikapoeder' },
      { qty: '1 el', name: 'olijfolie' },
      { qty: 'peper &', name: 'zout' },
    ],
    steps: [
      'Fruit de ui, knoflook en wortel in de olijfolie 3 minuten. Voeg komijn en paprikapoeder toe en bak 1 minuut mee.',
      'Giet de tomatenblokjes en bouillon erbij en voeg de linzen toe.',
      'Breng aan de kook en laat 20 minuten zachtjes koken tot de linzen zacht zijn.',
      'Pureer de soep met een staafmixer tot romig en breng op smaak met peper en zout.',
    ],
    variations: [
      { title: 'Met kokosmelk', text: 'Roer er een scheutje kokosmelk doorheen voor een romige variant.' },
      { title: 'Extra groente', text: 'Voeg courgetteblokjes mee met de linzen voor meer volume.' },
    ],
    tips: [
      'Spoel de linzen eerst goed af in een zeef.',
      'Deze soep is heerlijk om in te vriezen in porties voor een snelle lunch.',
    ],
    nutrition: { kcal: 290, protein: 18, carbs: 42, fat: 9, fiber: 14 },
    imagePrompt:
      'Creamy tomato and red lentil soup in a rustic bowl, smooth deep red texture, garnished with fresh herbs, warm comforting natural light, overhead food photography',
  },

  {
    slug: 'kip-caprese-salade',
    title: 'Kip-caprese salade met basilicumdressing',
    intro:
      'Een lichte, eiwitrijke salade met gebakken kip, romige burrata, tomaten en een frisse basilicumdressing. Glutenvrij en in 15 minuten klaar.',
    category: 'salade',
    tags: ['gezond', 'glutenvrij'],
    prepMin: 15,
    cookMin: 8,
    servings: 2,
    difficulty: 'gemakkelijk',
    ingredients: [
      { qty: '200 g', name: 'kipfilet, in plakken' },
      { qty: '2', name: 'tomaten, in plakken' },
      { qty: '100 g', name: 'burrata of mozzarella' },
      { qty: 'handje', name: 'verse basilicum' },
      { qty: '2 el', name: 'olijfolie' },
      { qty: '1 el', name: 'balsamico-azijn' },
      { qty: '1 tl', name: 'Dijonmosterd' },
      { qty: 'peper &', name: 'zout' },
    ],
    steps: [
      'Bak de kip in 1 eetlepel olijfolie goudbruin en gaar. Snijd in plakjes.',
      'Leg de tomaten op twee borden en verdeel de kip erover.',
      'Scheur de burrata erboven en verdeel het.',
      'Klop de overige olijfolie, balsamico, mosterd, peper en zout tot een dressing en schenk erover.',
      'Garneer met verse basilicum en serveer direct.',
    ],
    variations: [
      { title: 'Extra vulling', text: 'Serveer met een glutenvrije ciabatta of quinoa erbij.' },
      { title: 'Vegetarisch', text: 'Vervang de kip door geroosterde aubergine of tofu.' },
    ],
    tips: [
      'Scheur de burrata net voor serveren open voor een romige bite.',
      'Laat de tomaten op kamertemperatuur komen voor meer smaak.',
    ],
    nutrition: { kcal: 390, protein: 34, carbs: 8, fat: 25, fiber: 2 },
    imagePrompt:
      'Chicken caprese salad with sliced tomatoes, creamy burrata, basil and balsamic dressing on a plate, fresh Italian style healthy lunch, bright natural light, food photography',
  },

  {
    slug: 'gegrilde-groente-met-tonijnsalade',
    title: 'Geroosterde groente met tonijnsalade',
    intro:
      'Warme geroosterde groenten met een frisse tonijndressing. Eiwitrijk en snel klaar als lichte avondmaaltijd of stevige lunch.',
    category: 'salade',
    tags: ['gezond', 'glutenvrij', 'snel'],
    prepMin: 10,
    cookMin: 20,
    servings: 2,
    difficulty: 'gemakkelijk',
    ingredients: [
      { qty: '1', name: 'courgette, in halve maantjes' },
      { qty: '1', name: 'paprika, in reepjes' },
      { qty: '1/2', name: 'aubergine, in blokjes' },
      { qty: '1', name: 'rode ui, in parten' },
      { qty: '1 el', name: 'olijfolie' },
      { qty: '1 blik (160 g)', name: 'tonijn op water, uitgelekt' },
      { qty: '2 el', name: 'magere Griekse yoghurt' },
      { qty: '1 tl', name: 'citroensap' },
      { qty: 'handje', name: 'verse peterselie, fijngehakt' },
      { qty: 'peper &', name: 'zout' },
    ],
    steps: [
      'Verwarm de oven voor op 200 °C.',
      'Meng de groenten met de olijfolie, peper en zout en verdeel over een bakplaat. Rooster 20 minuten.',
      'Meng ondertussen de tonijn met de yoghurt, het citroensap en de peterselie tot een dressing.',
      'Verdeel de geroosterde groenten over twee borden en lepel de tonijndressing erover.',
    ],
    variations: [
      { title: 'Met ei', text: 'Garneer met een gehalveerd gekookt ei voor extra eiwitten.' },
      { title: 'Vegan', text: 'Vervang de tonijn door geroosterde kikkererwten en gebruik plantaardige yoghurt.' },
    ],
    tips: [
      'Snijd de groenten in gelijke stukken voor gelijkmatig garen.',
      'Laat de groenten iets afkoelen als je van een lauwe salade houdt.',
    ],
    nutrition: { kcal: 300, protein: 26, carbs: 20, fat: 13, fiber: 8 },
    imagePrompt:
      'Roasted vegetables with courgette, pepper, aubergine and red onion topped with tuna yogurt dressing on a plate, warm hearty healthy meal, natural light, overhead food photography',
  },

  {
    slug: 'bananenfrozen-yoghurt-met-cacao',
    title: 'Bananen \u2018nicecream\u2019 met cacao en pindakaas',
    intro:
      'Een ijskoud, gezond dessert van bevroren banaan met cacao en pindakaas, zonder toegevoegde suiker. Vegan, glutenvrij en in 2 minuten klaar.',
    category: 'dessert',
    tags: ['gezond', 'vegan', 'glutenvrij'],
    prepMin: 10,
    cookMin: 0,
    servings: 2,
    difficulty: 'gemakkelijk',
    ingredients: [
      { qty: '3', name: 'rijpe bananen, in plakken en ingevroren' },
      { qty: '2 el', name: 'cacaopoeder' },
      { qty: '1 el', name: 'pindakaas (100% noten)' },
      { qty: '2 el', name: '(plantaardige) melk (optioneel)' },
      { qty: '1 snuf', name: 'kaneel' },
    ],
    steps: [
      'Vries de bananenplakken minstens 4 uur in.',
      'Blend de bevroren banaan met de cacao, pindakaas en eventueel melk tot een romig geheel. Schraap tussendoor de rand van de blender af.',
      'Schep het \u2018nicecream\u2019 in kommen en bestrooi met kaneel.',
      'Serveer direct, of zet nog 15 minuten in de vriezer voor een steviger ijs.',
    ],
    variations: [
      { title: 'Extra eiwit', text: 'Voeg een schep chocolade-eiwitpoeder toe voor een eiwitrijk dessert.' },
      { title: 'Met aardbei', text: 'Voeg een handje verse aardbeien toe aan de mixer.' },
    ],
    tips: [
      'Hoe rijper de banaan, hoe zoeter het ijs smaakt.',
      'Gebruik een krachtige blender zodat het ijs glad en romig wordt.',
    ],
    nutrition: { kcal: 210, protein: 5, carbs: 42, fat: 6, fiber: 8 },
    imagePrompt:
      'Healthy banana nicecream with cocoa and peanut butter in a bowl, smooth frozen dessert topped with a sprinkle of cinnamon, fresh vegan treat, bright food styling, top-down',
  },
];

export const recipeBySlug = (slug: string): RecipeMeta | undefined =>
  recipes.find((r) => r.slug === slug);

export const featuredRecipes = (): RecipeMeta[] => recipes.filter((r) => r.featured);

export const recipesByCategory = (cat: RecipeMeta['category']) =>
  recipes.filter((r) => r.category === cat);

export const recipesByTag = (tag: RecipeMeta['tags'][number]) =>
  recipes.filter((r) => r.tags.includes(tag));