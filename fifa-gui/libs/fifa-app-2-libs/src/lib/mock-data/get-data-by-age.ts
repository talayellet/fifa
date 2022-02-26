import { ChartData } from '../utils/types';
import { NORM_DATA } from './norm-data';

export const getDataByAge = (min: number, max: number): ChartData => {
  const chartData: ChartData = {
    customdata: [],
    text: [],
    x: [],
    y: [],
  };
  for (let i = min; i <= max; i++) {
    const group = NORM_DATA[i];
    if (group) {
      for (let j = 0; j < group.length; j++) {
        chartData.x.push(group[j].age);
        chartData.y.push(group[j].overall);
        chartData.text.push(group[j].name);
        chartData.customdata?.push(
          `{"photo": "${group[j].photo}", "club": "${group[j].club}", "nationality": "${group[j].nationality}"}`
        );
      }
    }
  }
  return chartData;
};
