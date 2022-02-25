import { NormData, Player } from './types';

export const getGroup = (
  data: NormData,
  min: number,
  max: number
): Player[] => {
  const group = [];
  for (let i = min; i <= max; i++) {
    if (data[i]) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      group.push(...data[i]);
    }
  }
  return group;
};
