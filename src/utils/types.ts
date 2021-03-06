export type FeatureListType = {
  APIRef: string;
  metadata: MetaData;
};

export type MetaData = {
  name: string;
  className?: string;
  color?: string;
  type?: string;
  filter?: string;
  height?: number;
};

export type IsoformType = {
  sequence: string;
  md5: string;
  isoformAccession: string;
  swissProtDisplayedIsoform: boolean;
  mainEntityName: MainEntityName;
  synonyms?: SynonymsEntity[] | null;
  masterMapping?: MasterMappingEntity[] | null;
  uniqueName: string;
  canonicalIsoform: boolean;
  sequenceLength: number;
  isoelectricPointAsString: string;
  massAsString: string;
};

export type MainEntityName = {
  clazz?: null;
  type: string;
  qualifier?: null;
  id?: null;
  category?: null;
  name: string;
  parentId?: null;
  mainEntityName?: null;
  synonyms?: null[] | null;
  value: string;
  otherRecommendedEntityNames?: null[] | null;
  main?: null;
  composedName: string;
};

export type SynonymsEntity = {
  clazz?: null;
  type: string;
  qualifier?: null;
  id?: null;
  category?: null;
  name: string;
  parentId?: null;
  mainEntityName: string;
  synonyms?: null[] | null;
  value: string;
  otherRecommendedEntityNames?: null[] | null;
  main?: null;
  composedName: string;
};

export type MasterMappingEntity = {
  lower: number;
  upper: number;
};

export type FeatsByIso = {
  [key: string]: {
    category?: string;
    context?: any;
    description: string | null;
    end: number;
    evidenceLength: number;
    group: string;
    id: string;
    length: number;
    link: string;
    proteotypicity: boolean;
    quality: string;
    source: any;
    start: number;
    unicity: string;
    variant: boolean;
  };
}[];

export type FeatsForViewer = {
  [key: string]: MetaData;
};

export type VariantData = {
  id?: number;
  nextprotPosition: number;
  originalAminoAcid: string;
  variantAminoAcid: string;
  sift?: number | string;
  siftPrediction?: string;
  polyphen?: number | string;
  polyphenPrediction?: string;
  enspPosition?: number;
  status?: string;
};

export type FeatureData = MetaData & {
  data?: {
    x: number;
    y: number;
    id: string;
    category: string;
    description: string;
    level?: number;
  }[];
  height?: number;
};

export type TableData = {
  [key: number]: string | number;
};

export type IsoformMapping = {
  ensp: string;
  isoform: string;
  offset: number;
};

export type PredictionData = {
  isoform: string | undefined;
  variants: VariantData[];
};
