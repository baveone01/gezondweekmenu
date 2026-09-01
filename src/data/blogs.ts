// Informationele blogartikelen – gericht op long-tail zoekintenties in het Nederlands.
// Deze pagina's trekken SEO-verkeer naar de recepten- en weekmenu-pagina's (internal linking).

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  category: string;
  readingTime: number; // minuten
  imagePrompt: string;
  body: { heading: string; paragraphs: string[] }[];
  relatedRecipeSlugs?: string[];
  faq: { q: string; a: string }[];
  updatedAt: string; // '2026-09'
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'hoeveel-calorieen-per-dag-vrouw',
    title: 'Hoeveel calorieën per dag heeft een vrouw nodig?',
    metaTitle: 'Hoeveel calorieën per dag heeft een vrouw nodig? | Gezondweekmenu',
    description:
      'Ontdek hoeveel calorieën een vrouw gemiddeld per dag nodig heeft, hoe je dit berekent en hoe je gezond snackt zonder je dagtotaal te overschrijden.',
    category: 'Gezond eten',
    readingTime: 6,
    imagePrompt:
      'Healthy meal portion on a plate with a food scale and vegetables, balanced nutrition focus, bright kitchen, overhead food photography',
    body: [
      {
        heading: 'De gemiddelde caloriebehoefte van een vrouw',
        paragraphs: [
          'De caloriebehoefte verschilt per persoon en hangt af van leeftijd, gewicht, lengte en hoe actief je bent. Gemiddeld heeft een volwassen vrouw tussen de 1.800 en 2.200 calorieën per dag nodig, maar dit is slechts een richtlijn. Een actieve vrouw van 30 jaar heeft al snel meer nodig dan een vrouw van 60 jaar die vooral stilzit.',
          'Een handige vuistregel is dat je dagtotaal draait om je Basaal Metabolisme (BMR) plus je dagelijkse activiteit. Je BMR is het aantal calorieën dat je lichaam in rust verbruikt om te ademen, je hart te laten kloppen en organen te laten werken. Hoe meer spiermassa je hebt, hoe hoger je BMR.',
        ],
      },
      {
        heading: 'Zo bereken je jouw caloriebehoefte',
        paragraphs: [
          "Een simpele schatting: vermenigvuldig je gewicht in kilo's met 30 voor een indicatie van je onderhoudscalorieën. Weeg je bijvoorbeeld 65 kilo, dan kom je op ongeveer 1.950 calorieën per dag om op gewicht te blijven. Wil je afvallen, dan trek je er 300-500 calorieën vanaf; voor aankomen tel je er juist 300-500 bij op.",
          "Belangrijk: jagen op een te laag aantal calorieën is niet gezond en vaak niet vol te houden. Focus liever op voedzame gerechten, voldoende eiwitten en vezels, zodat je langer verzadigd blijft. Kijk op onze weekmenu's voor complete, uitgebalanceerde maaltijden.",
        ],
      },
      {
        heading: 'Gezond snacken binnen je dagtotaal',
        paragraphs: [
          'Snacken hoeft niet te betekenen dat je je caloriebudget overschrijdt. Kies voor dezelfde voedingswaarde: een handje noten, Griekse yoghurt, een stuk fruit of een wortel met hummus. Deze snacks bevatten vezels en eiwitten, waardoor je langer vol zit en minder snel naar ongezonde snacks grijpt.',
          'Wil je zelf de controle houden? Kies dan voor onze gezonde recepten als basis. Een gebalanceerd weekmenu met ontbijt, lunch en avondeten helpt je om zonder stress binnen je caloriebehoefte te eten.',
        ],
      },
      {
        heading: 'Combineer met een beweegpatroon',
        paragraphs: [
          'Calorieën in balans betekent ook beweging tegenover zitten. Elke dag een half uur wandelen of fietsen helpt al enorm. Samen met een gezond en gevarieerd weekmenu houd je je energie op peil zonder dat het een straf voelt.',
        ],
      },
    ],
    relatedRecipeSlugs: ['avocado-toast-met-gepocheerd-ei', 'griekse-koeksalade-met-kikkererwten'],
    faq: [
      { q: 'Hoeveel calorieën verbrandt een gezonde vrouw per dag?', a: 'Gemiddeld tussen de 1.800 en 2.200 calorieën, afhankelijk van leeftijd, gewicht en activiteit.' },
      { q: 'Hoe snel val je af met 1.500 calorieën per dag?', a: 'Afhankelijk van je uitgangssituatie, meestal 0,5-1 kilo per week. Combineer met beweging en eiwitrijk eten.' },
    ],
    updatedAt: '2026-09',
  },
  {
    slug: 'gezond-avondeten-binnen-20-minuten',
    title: 'Gezond avondeten in 20 minuten: 7 snelle gerechten',
    metaTitle: 'Gezond avondeten in 20 minuten: 7 snelle gerechten | Gezondweekmenu',
    description:
      'Geen tijd maar wel gezond eten? Deze 7 snelle, gezonde avondgerechten staan in 20 minuten op tafel. Met complete boodschappenlijst voor het hele gezin.',
    category: 'Snelle recepten',
    readingTime: 5,
    imagePrompt:
      'Quick healthy dinner in 20 minutes: pan with colorful vegetables and chicken being cooked, fast meal prep, bright warm kitchen light, appetizing',
    body: [
      {
        heading: 'Waarom snelle, gezonde maaltijden de sleutel zijn',
        paragraphs: [
          'Na een drukke werkdag is de verleiding groot om iets snels en ongezonds te halen. Juist dan maken snelle, gezonde gerechten het verschil. Met slimme voorbereiding en de juiste recepten staat er in 20 minuten een voedzame maaltijd op tafel die het hele gezin lekker vindt.',
          'Het geheim is combinatie: een eiwitbron (kip, vis, peulvruchten of eieren), veel groente en een snelle koolhydraatbron zoals zilvervliesrijst of courgette-noedels.',
        ],
      },
      {
        heading: '7 snelle en gezonde avondgerechten',
        paragraphs: [
          '1. Kipkerrie met kokosmelk en rijst – romig en klaar in 30 minuten. 2. Courgette noedels met avocadopesto – licht en koolhydraatarm. 3. Kikkererwtencurry met spinazie – vullend en vegetarisch. 4. Zalm met geroosterde groenten – rijk aan omega-3. 5. Gehaktballetjes in tomatensaus met courgettepasta – een kindvriendelijke klassieker. 6. Geroosterde groente-salade met feta – warm en voedzaam. 7. Romige groentesoep met kikkererwten – perfect voor een koude avond.',
          'Al deze gerechten vind je terug in onze receptencollectie, vaak met een koolhydraatarme of vegetarische variant erbij.',
        ],
      },
      {
        heading: 'Meal prep voor de drukke week',
        paragraphs: [
          "Doe op zondag een snelle meal prep: snijd alvast groenten, kook een dubbele portie rijst of quinoa en kook een grote pan soep in. Zo hoef je doordeweeks maar 15-20 minuten te koken. Onze weekmenu's helpen je om vooraf te plannen, zodat je nooit meer voor een lege pan en een volle stress staat.",
        ],
      },
    ],
    relatedRecipeSlugs: ['kipkerrie-met-kokosmelk-en-rijst', 'courgette-noedels-met-pesto', 'zalm-met-geroosterde-groenten'],
    faq: [
      { q: 'Wat is het snelste gezonde avondeten?', a: 'Gerechten met één pan, zoals kikkererwtencurry of courgette noedels met pesto, staan in 15-20 minuten klaar.' },
      { q: 'Wat kun je gezond eten als je weinig tijd hebt?', a: 'Kies voor eiwit + groente + snelle koolhydraten. Onze recepten zijn klaar in 30 minuten of minder.' },
    ],
    updatedAt: '2026-09',
  },
  {
    slug: 'hoeveel-proteine-per-dag',
    title: 'Hoeveel proteïne (eiwit) per dag heb je nodig?',
    metaTitle: 'Hoeveel proteïne per dag? Complete eiwitgids | Gezondweekmenu',
    description:
      'Lees hoeveel eiwitten je per dag nodig hebt voor spieren, verzadiging en herstel. Ontdek eiwitrijke gerechten en een voorbeeld voor een eiwitrijk weekmenu.',
    category: 'Voeding',
    readingTime: 7,
    imagePrompt:
      'Protein rich foods arranged on a table: chicken, eggs, Greek yogurt, legumes, almonds and salmon, healthy nutrition focus, bright natural light, flat lay',
    body: [
      {
        heading: 'Waarom je eiwitten nodig hebt',
        paragraphs: [
          'Eiwitten (proteïne) zijn de bouwstenen van je lichaam. Ze zijn essentieel voor de opbouw en het herstel van spieren, haar, nagels en enzymen. Daarnaast houden eiwitten je lang verzadigd, waardoor je minder snel tussen de maaltijden door snakt.',
          'Als je eiwitten eet, worden ze afgebroken tot aminozuren. Je lichaam heeft 9 essentiële aminozuren nodig die het niet zelf kan maken; die haal je uit voeding zoals vlees, vis, eieren, zuivel, soja, bonen en noten.',
        ],
      },
      {
        heading: 'De dagelijkse richtlijn voor eiwitten',
        paragraphs: [
          'Een veelgebruikte richtlijn is 0,8 tot 1 gram eiwit per kilogram lichaamsgewicht. Weeg je 70 kilo, dan heb je dus ongeveer 56-70 gram eiwit per dag nodig. Voor sporters en mensen die spieren willen opbouwen loopt dit op tot 1,6-2 gram per kilo.',
          "Het is slim om je eiwitten gelijkmatig over de dag te verdelen: bij elke maaltijd zo'n 20-30 gram. Zo ondersteun je spierherstel en houd je je energieniveau stabiel.",
        ],
      },
      {
        heading: 'Herkomst van eiwitten in je weekmenu',
        paragraphs: [
          'Combineer dierlijke en plantaardige bronnen: kip, zalm, eieren, Griekse yoghurt, kwark, linzen, kikkererwten, bonen en noten. Een gebalanceerd weekmenu zorgt ervoor dat je automatisch genoeg binnenkrijgt zonder apart te hoeven rekenen.',
          'Op zoek naar inspiratie? Bekijk ons eiwitrijke weekmenu of onze eiwitrijke recepten zoals kikkererwtencurry, wrap met kip en de linzensalade met feta.',
        ],
      },
      {
        heading: 'Te veel eiwit: bestaat dat?',
        paragraphs: [
          'Voor gezonde mensen is een hogere eiwitinname zelden een probleem. Je lichaam gebruikt wat het nodig heeft en de rest wordt gebruikt als energie of omgezet in vet. Alleen mensen met nierproblemen moeten oppassen; raadpleeg dan altijd een arts.',
        ],
      },
    ],
    relatedRecipeSlugs: ['kikkererwtencurry-met-spinazie', 'wrap-met-kip-en-crunchy-groente', 'linzensalade-met-feta-en-tomaat'],
    faq: [
      { q: 'Hoeveel eiwit zit er in een ei?', a: 'Een groot ei bevat ongeveer 6 gram eiwit.' },
      { q: 'Krijg ik genoeg eiwitten binnen als ik vegetarisch eet?', a: 'Ja, door linzen, bonen, kikkererwten, tofu, zuivel en noten te combineren kun je prima aan je dagelijkse eiwitbehoefte voldoen.' },
    ],
    updatedAt: '2026-09',
  },
];

export const blogBySlug = (slug: string): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug);