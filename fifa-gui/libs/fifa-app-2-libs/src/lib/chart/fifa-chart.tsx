import { ReactElement } from 'react';
import Plot from 'react-plotly.js';
import { CHART_TITLE } from '../utils/constants';
import { getDataByAge } from './get-data-by-age';

const group1 = getDataByAge(15, 20);

export const FifaChart = (): ReactElement => {
  return (
    <div>
      <Plot
        data={[
          {
            x: [...group1.x],
            y: [...group1.y],
            mode: 'markers',
            type: 'scatter',
            name: 'Team A',
            text: [...group1.text],
            marker: { size: 12 },
          },
        ]}
        layout={{ width: 1000, height: 500, title: CHART_TITLE }}
      />
    </div>
  );
};
