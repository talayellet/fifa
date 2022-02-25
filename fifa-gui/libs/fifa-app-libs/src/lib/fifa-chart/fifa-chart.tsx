import { ReactElement, useEffect, useState } from 'react';
import { ResponsiveScatterPlot } from '@nivo/scatterplot';
import { ChartData, FifaChartProps } from '../utils/types';
import { CHART_X_AXIS_LABEL, CHART_Y_AXIS_LABEL } from '../utils/constants';
import { FifaChartWrapper } from '../utils/styles';
import noData from '../resources/noData.png';
import { normalizeChartData } from './normalize-chart-data';

export const FifaChart = ({ data }: FifaChartProps): ReactElement => {
  const [chartData, setChartData] = useState<Array<ChartData>>([
    { id: '', data: [] },
  ]);
  useEffect(() => {
    setChartData([normalizeChartData(data)]);
  }, [data]);

  if (data.length === 0) {
    return (
      <FifaChartWrapper>
        <img src={noData} alt="No Data" />
      </FifaChartWrapper>
    );
  }

  return (
    <FifaChartWrapper>
      <ResponsiveScatterPlot
        data={chartData}
        margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
        xScale={{ type: 'linear', min: 0, max: 'auto' }}
        xFormat=">-.2f"
        yScale={{ type: 'linear', min: 0, max: 'auto' }}
        yFormat=">-.2f"
        blendMode="multiply"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: CHART_X_AXIS_LABEL,
          legendPosition: 'end',
          legendOffset: 46,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: CHART_Y_AXIS_LABEL,
          legendPosition: 'end',
          legendOffset: -60,
        }}
        colors={{ scheme: 'category10' }}
      />
    </FifaChartWrapper>
  );
};
