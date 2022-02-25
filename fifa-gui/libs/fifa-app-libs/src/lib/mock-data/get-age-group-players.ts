import { Player } from '../utils/types';
import { RAW_DATA } from './raw-data';

export const getAgeGroupPlayers = (min: number, max: number): Player[] => {
  const players = RAW_DATA.filter((item) => item.age >= min && item.age <= max);
  return players;
};
