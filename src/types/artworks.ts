export type Artwork = {
  id: number;
  name: LocalizedProp;
  category: Category;
  technique: LocalizedProp;
  size: Size;
  status?: Status;
  price?: LocalizedProp;
};

export type LocalizedProp = {
  rs: string;
  en: string;
};

const CATEGORIES = ['icons', 'illustrations', 'necklaces'] as const;

type Category = typeof CATEGORIES[number];

const STATUSES = ['available', 'sold'] as const;

export type Status = typeof STATUSES[number];

export type Size = {
  width?: number | null;
  height?: number | null;
  radius?: number | null;
};
