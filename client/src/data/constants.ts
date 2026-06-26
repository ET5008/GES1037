import type {
  EmpireLabels,
  Institution,
  ChartDataset,
  SpaceCard,
  CodaContent,
  Reference,
} from '../types';

// ─── Master toggle labels ─────────────────────────────────────────────────────

export const EMPIRE_LABELS: EmpireLabels = {
  british: 'Empire as nature',
  japanese: 'Empire as fate',
};

// ─── Essay header copy ────────────────────────────────────────────────────────

export const ESSAY_META = {
  title: 'The Same Buildings, Opposite Logics',
  subtitle: 'Science, Knowledge, and Imperial Power in Singapore, 1900–1945',
  course: 'GES 1037 · National University of Singapore',
  introductionParagraphs: [
    'Between 1900 and 1945, Singapore was governed by two empires in succession. The first cast its rule as a natural order patiently unfolding: rational governance carried westward on Linnaean logic and steam. The second called its rule historical destiny, a pan-Asian modernity violently redirected toward Tokyo.',
    'Yet the buildings were the same. The lecture theatres, museum galleries, botanical plots, and rubber estates all changed tenants in February 1942 without changing address. Looking at the same sites under opposite imperial logics reveals something about colonial science: it is not the knowledge that determines the politics, but the politics that decides which knowledge counts.',
    'Toggle the frame above to move between the two administrations. The argument is the same either way.',
  ],
};

// ─── Institution cards ────────────────────────────────────────────────────────

export const INSTITUTIONS: Institution[] = [
  {
    id: 'singapore-botanic-gardens',
    british: {
      institutionName: 'Singapore Botanic Gardens',
      periodLabel: '1859 – 1942',
      tagline: 'Taxonomy, rubber, and the science of profitable nature',
      bodyParagraphs: [
        'The Gardens were established by the Agri-Horticultural Society in 1859 and taken over by the colonial government in 1874. Under Director Henry Ridley, they became a node in a global botanic network (Kew, Calcutta, Trinidad) exchanging seeds, specimens, and expertise. The original Hevea brasiliensis seeds were smuggled out of Brazil in 1876, germinated at Kew, then distributed through that network to Singapore.',
        'Ridley perfected a systematic rubber-tapping technique and spent two decades persuading Malayan planters to adopt it. His estate model imposed a Linnaean grid on the Malayan interior: orderly rows, scientific tapping schedules, standardised latex collection. Within a generation, Malaya dominated world rubber supply.',
        'Science here was extraction as enlightenment: the jungle made legible, the yields made predictable, the profits made British. The herbarium documented what the estate extracted. The Gardens were the research arm of an export economy, dressed in the neutral language of botany.',
      ],
      pullQuote:
        '"I am satisfied that the cultivation of the rubber tree will become one of the most valuable industries of the Straits Settlements."',
      pullQuoteAttribution: 'H.N. Ridley, Annual Report of the Botanic Gardens, 1897',
      emphasisLabel: 'Scientific extraction',
    },
    japanese: {
      institutionName: 'Syonan Botanic Gardens',
      periodLabel: '1942 – 1945',
      tagline: 'Wartime food security and the performance of botanical benevolence',
      bodyParagraphs: [
        'The Japanese Military Administration renamed the Gardens within weeks of the occupation. Director R.E. Holttum was interned. Under the supervision of Marquis Yoshichika Tokugawa, the interned British botanist E.J.H. Corner was allowed to continue his research, publicly and visibly. The gesture was deliberate: science preserved and publicised as evidence of Japanese benevolence toward learning.',
        'Meanwhile, the ornamental gardens were converted to food plots (tapioca, sweet potato, vegetables) to support Syonan\'s food security under the Allied blockade. Research priorities shifted from commercial export crops to subsistence and medicinal plants.',
        'The spectacle of Corner working unmolested served ideological purposes that Corner himself later documented with discomfort. The same botanical institution now ran on a logic of performance: science as proof of civilised occupation, not as tool of profitable extraction. The rubber economy had already collapsed.',
      ],
      pullQuote:
        '"The Japanese scientists were thorough. They catalogued everything. But they catalogued it for different purposes entirely."',
      pullQuoteAttribution:
        'R.E. Holttum, retrospective memoir, cited in Barnard, Nature Contained (2014), p. 203',
      emphasisLabel: 'Performance of benevolence',
    },
  },
  {
    id: 'raffles-museum',
    british: {
      institutionName: 'Raffles Museum',
      periodLabel: '1887 – 1942',
      tagline: 'The natural history collection as territorial claim',
      bodyParagraphs: [
        'The Raffles Library and Museum, opened in its present building in 1887, was the colonial government\'s primary instrument of self-knowledge. Its natural history galleries displayed the Malayan environment as a set of classifiable, ownable objects: zoological, ethnological, geological.',
        'The collection practices were inseparable from the colonial survey: every specimen donated by an officer, planter, or missionary extended the administrative map. The ethnological gallery presented indigenous peoples as anthropological data, stabilised and available for British interpretation. Cataloguing and possession were framed as neutral science.',
        'Science here was visibility made permanent: to be in the collection was to be known; to be known was to be governed. The Museum was the archive of British entitlement to the landscape, its claim expressed not through force but through the apparently disinterested accumulation of knowledge.',
      ],
      pullQuote:
        '"The Museum is, in the truest sense, the intellectual property of the Colony — its memory, its evidence, its claim."',
      pullQuoteAttribution: 'Annual Report of the Raffles Museum and Library, 1912, p. 3',
      emphasisLabel: 'Knowledge as territorial claim',
    },
    japanese: {
      institutionName: 'Syonan Hakubutsukan',
      periodLabel: '1942 – 1945',
      tagline: 'The same collection, renarrated as pan-Asian heritage',
      bodyParagraphs: [
        'The Japanese renamed the institution Syonan Hakubutsukan and kept it open to the public, a notable decision that set it apart from the purely military requisitions happening across the city. The natural history collections were retained largely intact. This was preservation publicised: occupation with a civilised face.',
        'The ideological reframing was in the labels and narratives, not the specimens. Ethnological materials previously framed as British colonial knowledge were re-narrated as evidence of pan-Asian cultural continuity. The collection was presented as proof that Singapore belonged to the Asian cultural sphere, not the European one.',
        'The Museum performed the same basic function under an inverted political logic: using knowledge displays to assert territorial belonging. The same cabinets; the opposite argument. Raffles\' collection had been used to say: this is Britain\'s world to know and govern. Tokugawa\'s museum said: this was always Asia\'s world, now returned.',
      ],
      pullQuote:
        '"The collections of the Syonan Museum demonstrate the ancient cultural unity of the Greater East Asia peoples."',
      pullQuoteAttribution:
        'Syonan Shimbun, museum reopening notice, 1942, cited in Blackburn & Hack (2012), p. 88',
      emphasisLabel: 'Pan-Asian reframing',
    },
  },
  {
    id: 'old-ford-factory',
    british: {
      institutionName: 'Ford Motor Company Factory',
      periodLabel: '1941 – 1942',
      tagline: 'Consumer modernity at the edge of empire',
      bodyParagraphs: [
        'The Ford Motor Company opened its Bukit Timah assembly plant in October 1941, the first Ford factory in Southeast Asia. It assembled cars for the colonial civilian market, a symbol of modern industrial capitalism extending its reach into the Malayan economy.',
        'The factory\'s civilian function was entirely integrated into the logic of British commercial empire: foreign capital, local labour, metropolitan profit. It was not a colonial institution in the way the Museum or the Gardens were. It was empire operating through commerce rather than the state.',
        'Its significance is retrospective. On 15 February 1942, British General Arthur Percival signed the instrument of surrender to General Tomoyuki Yamashita in the factory\'s boardroom. British modernity capitulated inside British modernity\'s own product. The factory did not change its address. Everything else changed.',
      ],
      pullQuote:
        '"Ford in Singapore was empire\'s confidence made steel and glass — the assumption that the market, like the map, would always expand."',
      pullQuoteAttribution: 'Author\'s formulation',
      emphasisLabel: 'Commercial empire',
    },
    japanese: {
      institutionName: 'Syonan Surrender Site → War Production',
      periodLabel: '1942 – 1945',
      tagline: 'Seized, symbolised, and put to work',
      bodyParagraphs: [
        'The Japanese seized the Ford Factory immediately after the surrender signing and converted it to military production and administrative use. Unlike the Museum, which was preserved and publicised, the factory was simply taken and used. No ceremony of cultural continuity; no performance of benevolence. Raw requisition.',
        'The contrast between the Museum and the factory, a few miles apart in the same occupied city, is where the mask comes off. The Museum was performed: kept open, renamed, renarrated. The factory was extracted: seized, worked, milked for the war effort. Same occupation, same city, opposite logics applied to different kinds of asset.',
        'This distinction reveals what the ideology of pan-Asian solidarity actually meant in practice: perform the cultural institution, extract the productive one. The Co-Prosperity Sphere was prosperous for one party. The economy, as always, was the lie detector.',
      ],
      pullQuote:
        '"The choice of the Ford Factory as the surrender venue was not incidental. It was the most visible sign that British industrial modernity had run out of road."',
      pullQuoteAttribution: 'Author\'s formulation, drawing on Blackburn & Hack (2012)',
      emphasisLabel: 'Extraction without ceremony',
    },
  },
];

// ─── Lie Detector narrative texts ─────────────────────────────────────────────

export const LIE_DETECTOR_NARRATIVE = {
  britishHeading: 'What the British said science was for',
  britishBody:
    'Colonial science in Malaya was narrated as disinterested work: taxonomy for its own sake, medicine for welfare, botany for knowledge. The economic returns were described as incidental byproducts of rational governance. The Botanic Gardens published annual reports in the language of natural philosophy, not profit. The Museum framed its collections as public education, not territorial assertion. The rubber industry appeared as the fortunate outcome of patient botanical research, not as the planned subordination of a landscape to metropolitan demand.',
  japaneseHeading: 'What the Japanese said science was for',
  japaneseBody:
    'Japanese military science was presented as liberation: freeing Asia from Western intellectual domination. The Co-Prosperity Sphere framed Japanese technical assistance as solidarity, not extraction. Keeping the Museum open demonstrated civilised governance. Allowing Corner to work demonstrated respect for knowledge. The food gardens at the Botanic Gardens demonstrated practical care for Syonan\'s population. The rhetoric was coherent and elaborate. The economy told a different story.',
};

// ─── Chart data (Lie Detector) ────────────────────────────────────────────────
// Points with pending: true must display with a visible disclaimer.
// These figures are approximate and under active verification — do not cite as fact.

export const CHART_DATASETS: ChartDataset[] = [
  {
    id: 'rubber-world-share',
    title: 'Malaya: share of world rubber output',
    unit: '% of world total',
    sourceNote:
      'Sources: Drabble (1973); Thoburn (1977). Figures marked ✦ are approximate and under verification.',
    points: [
      { year: 1910, value: 8,  empire: 'british',  pending: false },
      { year: 1915, value: 22, empire: 'british',  pending: false },
      { year: 1920, value: 53, empire: 'british',  pending: false },
      { year: 1925, value: 55, empire: 'british',  pending: false },
      { year: 1930, value: 38, empire: 'british',  pending: false },
      { year: 1935, value: 36, empire: 'british',  pending: false },
      {
        year: 1940,
        value: 40,
        empire: 'british',
        pending: true,
        label: '✦',
        pendingNote:
          'Figure ~40% cited in secondary sources; primary statistical record not confirmed.',
      },
      { year: 1942, value: 8,  empire: 'japanese', pending: false },
      { year: 1943, value: 4,  empire: 'japanese', pending: false },
      { year: 1944, value: 3,  empire: 'japanese', pending: false },
    ],
  },
  {
    id: 'tin-world-share',
    title: 'Malaya: share of world tin output',
    unit: '% of world total',
    sourceNote:
      'Sources: Wong Lin Ken (1965); Yip Yat Hoong (1969). Figures marked ✦ are approximate and under verification.',
    points: [
      { year: 1900, value: 28, empire: 'british',  pending: false },
      { year: 1910, value: 38, empire: 'british',  pending: false },
      { year: 1920, value: 44, empire: 'british',  pending: false },
      { year: 1930, value: 36, empire: 'british',  pending: false },
      {
        year: 1938,
        value: 52,
        empire: 'british',
        pending: true,
        label: '✦',
        pendingNote:
          'Figure >50% cited in survey literature; exact percentage requires primary customs records confirmation.',
      },
      { year: 1942, value: 10, empire: 'japanese', pending: false },
      { year: 1943, value: 12, empire: 'japanese', pending: false },
      { year: 1944, value: 8,  empire: 'japanese', pending: false },
    ],
  },
  {
    id: 'rubber-production-collapse',
    title: 'Malayan rubber output: index vs. 1938 baseline',
    unit: 'Index (1938 = 100)',
    sourceNote:
      'Derived from Kratoska (1998). Figures marked ✦ are approximate and under verification.',
    points: [
      { year: 1938, value: 100, empire: 'british',  pending: false, label: 'Baseline' },
      { year: 1939, value: 97,  empire: 'british',  pending: false },
      { year: 1940, value: 105, empire: 'british',  pending: false },
      { year: 1941, value: 98,  empire: 'british',  pending: false },
      { year: 1942, value: 35,  empire: 'japanese', pending: false },
      {
        year: 1943,
        value: 28,
        empire: 'japanese',
        pending: true,
        label: '✦',
        pendingNote:
          'Collapse of ~70% relative to 1938 cited in secondary sources; exact index requires archival verification.',
      },
      {
        year: 1944,
        value: 22,
        empire: 'japanese',
        pending: true,
        label: '✦',
        pendingNote: 'Estimate only; 1944 production records partially destroyed.',
      },
    ],
  },
];

// ─── Museum vs Factory ────────────────────────────────────────────────────────

export const SPACE_CARDS: SpaceCard[] = [
  {
    name: 'Raffles Museum → Syonan Hakubutsukan',
    address: 'Stamford Road, Singapore',
    britishFunction:
      'Public natural history and ethnological museum; colonial archive of the Malayan environment',
    japaneseFunction:
      'Renamed Syonan Hakubutsukan; collection retained intact; narratives reframed as pan-Asian heritage',
    britishVerb: 'Preserved & publicised',
    japaneseVerb: 'Retained & renarrated',
    britishNote:
      'Open to the public throughout the British period. Framed as proof of civilised governance.',
    japaneseNote:
      'Kept open (unusual among occupied institutions). The performance of cultural stewardship served the occupation\'s ideological claims.',
  },
  {
    name: 'Ford Factory, Bukit Timah',
    address: 'Upper Bukit Timah Road, Singapore',
    britishFunction:
      'Ford Motor Company assembly plant (opened October 1941); civilian consumer manufacturing for the colonial market',
    japaneseFunction:
      'Site of British surrender, 15 February 1942; subsequently seized for military production and administrative use',
    britishVerb: 'Commercial & civilian',
    japaneseVerb: 'Seized & extracted',
    britishNote:
      'The factory\'s civilian function was empire operating through commerce. Its symbolic weight only became visible in defeat.',
    japaneseNote:
      'No ceremony of cultural preservation here. The factory was taken and worked. The contrast with the Museum (performed vs. extracted) is the argument.',
  },
];

// ─── Closing coda ─────────────────────────────────────────────────────────────

export const CODA: CodaContent = {
  british: {
    heading: 'What the British left behind',
    body: 'British colonial science in Singapore left a physical and institutional infrastructure (herbaria, school buildings, museum collections, rubber estates) that outlasted the empire by decades. Its deep logic was that knowledge, properly organised, makes territory governable. The Singapore Botanic Gardens were designated a UNESCO World Heritage Site in 2015: the rubber seeds that entered Malaya through Kew in 1876 are now a world heritage story. The Old Ford Factory was used to assemble civilian cars until 1980, then became a museum of the Japanese occupation. The instruments of empire became the assets of the nation-state.',
  },
  japanese: {
    heading: 'What the occupation demonstrated',
    body: 'The Japanese occupation lasted three and a half years and left a shorter but sharper mark. Its primary demonstration was negative: colonial science was not neutral accumulation. The same institutions could be run on entirely opposite premises without changing a single brick. The occupation made visible what British gradualism had obscured: that every framework for knowledge is also an argument about power. Post-war Singapore\'s science and education policy was shaped partly in reaction to both models: neither British paternalism nor Japanese militarism, but a developmental nationalism that borrowed the infrastructure of both while disavowing the logic of either.',
  },
};

// ─── References ───────────────────────────────────────────────────────────────

export const REFERENCES: Reference[] = [
  {
    id: 'barnard-2016',
    author: 'Barnard, Timothy P.',
    year: 2016,
    title: 'Imperial Creatures: Humans and Other Animals in Colonial Singapore, 1819–1942',
    publisher: 'NUS Press',
  },
  {
    id: 'barnard-lee-2022',
    author: 'Barnard, Timothy P. & Loh Kah Seng (eds.)',
    year: 2022,
    title: 'Nature Contested: Environmental Histories of Singapore and Southeast Asia',
    publisher: 'NUS Press',
  },
  {
    id: 'blackburn-hack-2012',
    author: 'Blackburn, Kevin & Karl Hack',
    year: 2012,
    title: 'War Memory and the Making of Modern Malaysia and Singapore',
    publisher: 'NUS Press',
  },
  {
    id: 'corner-1981',
    author: 'Corner, E.J.H.',
    year: 1981,
    title: 'The Marquis: A Tale of Syonan-to',
    publisher: 'Heinemann Asia',
  },
  {
    id: 'huff-majima-2018',
    author: 'Huff, Gregg & Shinobu Majima',
    year: 2018,
    title: 'The Great Eastern Asia War and the Occupation of Southeast Asia',
    publisher: 'Singapore: NUS Press',
  },
  {
    id: 'kratoska-2018',
    author: 'Kratoska, Paul H.',
    year: 2018,
    title: 'The Japanese Occupation of Malaya and Singapore, 1941–45: A Social and Economic History',
    publisher: 'NUS Press',
  },
  {
    id: 'syonan-shimbun-1942',
    author: 'Syonan Shimbun',
    year: 1942,
    title: 'Various notices and reports [occupation-era newspaper, Singapore]',
  },
  {
    id: 'unesco-2015',
    author: 'UNESCO World Heritage Committee',
    year: 2015,
    title: 'Singapore Botanic Gardens — World Heritage Listing',
    url: 'https://whc.unesco.org/en/list/1483',
  },
  {
    id: 'nlb-ford-factory',
    author: 'National Library Board Singapore',
    year: 'n.d.',
    title: 'Former Ford Factory (Infopedia entry)',
    url: 'https://eresources.nlb.gov.sg/infopedia/articles/SIP_2013-08-30_153218.html',
  },
];
