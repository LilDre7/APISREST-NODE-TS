export type difficulty = 1 | 2 | 3 | 4;

export type rating = 1 | 2 | 3 | 4;

export interface DiaryEntry {
  name: string;
  username: string;
  rating: rating;
  favorites: number;
  visits: number;
  difficulty: difficulty;
  terrain: number;
  size: string;
  created: string;
  updated: string;
  coords: string;
}

// interface SpecialDiaryEntry extends DiaryEntry {
//   special: boolean;
// }

// type SpecialDiaryEntry2 = DiaryEntry & {
//   special: boolean;
// };
