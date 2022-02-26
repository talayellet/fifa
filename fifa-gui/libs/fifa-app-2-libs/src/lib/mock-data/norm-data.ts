import { RAW_DATA } from './raw-data';
import { NormData } from '../utils/types';

const normalizeRawData = (): NormData => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const normData: any = {};
  for (let i = 16; i <= 34; i++) {
    const players = RAW_DATA.filter((item) => item.age === i);
    if (players.length > 0) {
      normData[i] = players;
    }
  }
  return normData;
};

export const NORM_DATA = normalizeRawData();
