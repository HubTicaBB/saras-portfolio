export type Artwork = {
  id: number,
  name: string,
  category: Category,
  technique: string,
  size: Size,
  status?: Status
  price?: string
}

const CATEGORIES = [
  'icons',
  'illustrations',
  'necklaces'
] as const;

type Category = typeof CATEGORIES[number];

const STATUSES = [
  'available',
  'sold',
] as const;

export type Status = typeof STATUSES[number];

export type Size = {
  width?: number | null,
  height?: number | null,
  radius?: number | null,
}