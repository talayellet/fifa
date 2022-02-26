import { ReactElement } from 'react';
import Plot from 'react-plotly.js';

export const Overview = (): ReactElement => {
  return (
    <div>
      <Plot
        data={[
          {
            x: [1, 2, 3, 4, 5],
            y: [1, 6, 3, 6, 1],
            mode: 'markers',
            type: 'scatter',
            name: 'Team A',
            text: ['A-1', 'A-2', 'A-3', 'A-4', 'A-5'],
            marker: { size: 12 },
          },
        ]}
        layout={{ width: 320, height: 240, title: 'A Fancy Plot' }}
      />
    </div>
  );
};
