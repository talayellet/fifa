import { ReactElement, useCallback, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonWrapper, ChartWrapper } from '../utils/styles';
import { FifaChart } from '../chart/fifa-chart';
import { RAW_DATA } from '../mock-data/raw-data';
import {
  INITIAL_MAX_AGE,
  INITIAL_MIN_AGE,
  MAX_REFRESH_COUNT,
  TIME_INTERVAL,
} from '../utils/constants';

if (localStorage) {
  const rawData = JSON.stringify(RAW_DATA, null, 2);
  localStorage.setItem('rawData', rawData);
}

export const Overview = (): ReactElement => {
  const [refreshKey, setRefreshKey] = useState<number>(0);
  const [minAge, setMinAge] = useState<number>(INITIAL_MIN_AGE);
  const [maxAge, setMaxAge] = useState<number>(INITIAL_MAX_AGE);
  const [started, setStarted] = useState<boolean>(false);

  const [intervalId, setIntervalId] = useState<NodeJS.Timer>();
  const handleClick = useCallback(() => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(undefined);
      setRefreshKey(0);
      setStarted(false);
      return;
    }

    setStarted(true);
    const newIntervalId = setInterval(() => {
      setRefreshKey((prevCount) => prevCount + 1);
    }, TIME_INTERVAL);
    setIntervalId(newIntervalId);
  }, [intervalId]);

  useEffect(() => {
    if (refreshKey && refreshKey < MAX_REFRESH_COUNT) {
      setMinAge((prev) => prev + 1);
      setMaxAge((prev) => prev + 1);
    } else if (refreshKey === 0) {
      setMinAge(INITIAL_MIN_AGE);
      setMaxAge(INITIAL_MAX_AGE);
    } else if (refreshKey > MAX_REFRESH_COUNT) {
      setRefreshKey(0);
    }
  }, [refreshKey]);

  return (
    <div>
      {!started && <ChartWrapper>Click 'Play' to view Fifa Chart</ChartWrapper>}
      {started && <FifaChart refreshKey={refreshKey} />}
      <ButtonWrapper>
        <Button onClick={handleClick} variant="primary">
          {started ? <span>Stop</span> : <span>Play</span>}
        </Button>{' '}
        {started && <span>{`Age: ${minAge}-${maxAge}`}</span>}
      </ButtonWrapper>
    </div>
  );
};
