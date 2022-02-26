import { ReactElement, useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import { CHART_TITLE } from '../utils/constants';
import { ChartData, FifaChartProps } from '../utils/types';
import { FifaChartWrapper } from '../utils/styles';
import { GROUPS } from '../mock-data/groups';
import noData from '../resources/noData.png';

export const FifaChart = ({ refreshKey }: FifaChartProps): ReactElement => {
  const [activeGroup, setActiveGroup] = useState<ChartData>(GROUPS[0]);
  const [index, setIndex] = useState<number>(0);
  useEffect(() => {
    if (index < GROUPS.length) {
      setActiveGroup(GROUPS[index]);
      setIndex((prev) => prev + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshKey]);
  if (refreshKey === 0) {
    return (
      <FifaChartWrapper>
        <img src={noData} alt="No Data" />
      </FifaChartWrapper>
    );
  }
  return (
    <div>
      <Plot
        data={[
          {
            x: [...activeGroup.x],
            y: [...activeGroup.y],
            mode: 'markers',
            type: 'scatter',
            text: [...activeGroup.text],
            marker: { size: 12 },
          },
        ]}
        layout={{ width: 1000, height: 500, title: CHART_TITLE }}
      />
    </div>
  );
};
