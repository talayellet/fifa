import styled from 'styled-components';
import { CHART_HEIGHT, CHART_WIDTH } from './constants';

export const FifaChartWrapper = styled.div`
  height: 500px;
  width: 1000px;
`;
export const ButtonWrapper = styled.div`
  margin-left: 25px;
`;
export const ChartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${CHART_HEIGHT}px;
  width: ${CHART_WIDTH}px;
`;
