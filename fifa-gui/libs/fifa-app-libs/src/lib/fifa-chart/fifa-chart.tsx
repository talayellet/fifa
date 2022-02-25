import { ReactElement, useEffect, useState } from 'react';
import { ResponsiveScatterPlot } from '@nivo/scatterplot';
import { ChartData, FifaChartProps } from '../utils/types';
import {
  CHART_X_AXIS_LABEL,
  CHART_Y_AXIS_LABEL,
  INITIAL_CHART_DATA,
} from '../utils/constants';
import { FifaChartWrapper } from '../utils/styles';
import { INITIAL_MAX, INITIAL_MIN } from '../utils/constants';
import { getNormData } from '../mock-data/get-norm-data';
import { getGroup } from '../utils/get-group';
import noData from '../resources/noData.png';
import { normalizeChartData } from './normalize-chart-data';

const normData = getNormData();

export const FifaChart = ({
  minAge,
  maxAge,
  refreshKey,
  setMaxAge,
  setMinAge,
}: FifaChartProps): ReactElement => {
  const [chartData, setChartData] = useState<ChartData>(INITIAL_CHART_DATA);
  useEffect(() => {
    if (refreshKey === 0) {
      setMinAge(INITIAL_MIN);
      setMaxAge(INITIAL_MAX);
      setChartData(INITIAL_CHART_DATA);
    } else {
      const newGroup = getGroup(normData, minAge, maxAge);
      setChartData(normalizeChartData(newGroup));
      setMinAge(minAge + 1);
      setMaxAge(maxAge + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshKey]);

  if (chartData.data.length === 0 || refreshKey === 0) {
    return (
      <FifaChartWrapper>
        <img src={noData} alt="No Data" />
      </FifaChartWrapper>
    );
  }

  return (
    <FifaChartWrapper>
      <ResponsiveScatterPlot
        data={[chartData]}
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
