import { DiaryEntry } from "../types";
import diaryData from "./diaries.json";

const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>;

export default diaries;

export const getEntries = () => diaryData;

export const addEntry = () => null;