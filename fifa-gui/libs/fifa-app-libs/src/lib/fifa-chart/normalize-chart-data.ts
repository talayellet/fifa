import { ChartData, Player } from '../utils/types';

export const normalizeChartData = (data: Player[]): ChartData => {
  const items = data.map((item) => ({
    x: item.wage,
    y: item.overall,
  }));
  return {
    id: 'some label',
    data: items,
  };
};
