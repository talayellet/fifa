import { ChartData } from '../utils/types';
import { getDataByAge } from './get-data-by-age';

const getGroups = (): ChartData[] => {
  const groups = [];
  for (let i = 15; i < 29; i++) {
    const group = getDataByAge(i, i + 5);
    groups.push(group);
  }
  return groups;
};

export const GROUPS = getGroups();
