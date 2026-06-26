export type EmpireState = 'british' | 'japanese';

export interface EmpireLabels {
  british: string;
  japanese: string;
}

export interface InstitutionContent {
  institutionName: string;
  periodLabel: string;
  tagline: string;
  bodyParagraphs: string[];
  pullQuote: string;
  pullQuoteAttribution: string;
  emphasisLabel: string;
}

export interface Institution {
  id: string;
  british: InstitutionContent;
  japanese: InstitutionContent;
}

export interface ChartDataPoint {
  year: number;
  value: number;
  empire: EmpireState;
  pending: boolean;
  pendingNote?: string;
  label?: string;
}

export interface ChartDataset {
  id: string;
  title: string;
  unit: string;
  points: ChartDataPoint[];
  sourceNote: string;
}

export type LieDetectorView = 'narrative' | 'economy';

export interface SpaceCard {
  name: string;
  address: string;
  britishFunction: string;
  japaneseFunction: string;
  britishVerb: string;
  japaneseVerb: string;
  britishNote: string;
  japaneseNote: string;
}

export interface CodaContent {
  british: { heading: string; body: string };
  japanese: { heading: string; body: string };
}

export interface Reference {
  id: string;
  author: string;
  year: number | string;
  title: string;
  publisher?: string;
  url?: string;
}
