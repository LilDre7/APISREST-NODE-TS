export type favorites = 1 | 2 | 3 | 4;

export type rating = 1 | 2 | 3 | 4;

export interface DiaryEntry {
  id: number;
  name: string;
  username: string;
  rating: rating;
  favorites: favorites;
  visits: number;
}

/*
export type NonSensitiveInfoDiaryEntry = Pick<
  DiaryEntry,
  "rating" | "favorites" | "visits" | "difficulty" | "terrain"
>;
*/

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, "visits">;

// interface SpecialDiaryEntry extends DiaryEntry {
//   special: boolean;
// }

// type SpecialDiaryEntry2 = DiaryEntry & {
//   special: boolean;
// };
