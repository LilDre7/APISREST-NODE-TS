import { NonSensitiveInfoDiaryEntry, DiaryEntry } from "../types";
import diaryData from "./diaries.json";

const diaries: DiaryEntry[] = diaryData as DiaryEntry[];

export const getEntries = (): DiaryEntry[] => diaries;

export const findById = (
  id: number
): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find((d) => d.id === id);
  if (entry !== null) {
    const { visits, ...resOfDiary } = entry;
    return resOfDiary;
  }
  return entry;
};

export const getEntriesWithoutSensitiveInfo =
  (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({ id, name, username, rating, favorites, visits }) => {
      return { id, name, username, rating, favorites, visits };
    });
  };

export const addEntry = (): undefined => undefined;
