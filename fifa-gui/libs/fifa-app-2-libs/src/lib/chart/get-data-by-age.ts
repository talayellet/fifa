import { ChartData } from '../utils/types';
import { NORM_DATA } from '../mock-data/norm-data';

export const getDataByAge = (min: number, max: number): ChartData => {
  const chartData: ChartData = {
    x: [],
    y: [],
    text: [],
  };
  for (let i = min; i <= max; i++) {
    const group = NORM_DATA[i];
    if (group) {
      for (let j = 0; j < group.length; j++) {
        chartData.x.push(group[j].age);
        chartData.y.push(group[j].overall);
        chartData.text.push(group[j].name);
      }
    }
  }
  return chartData;
};
