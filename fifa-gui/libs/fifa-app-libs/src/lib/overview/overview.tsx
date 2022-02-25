import { ReactElement, useCallback, useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  AgeLabelWrapper,
  ControlsBarWrapper,
  OverviewWrapper,
} from '../utils/styles';
import { FifaChart } from '../fifa-chart/fifa-chart';
import {
  INITIAL_MAX,
  INITIAL_MIN,
  PLAY_BTN_LABEL,
  TIME_INTERVAL,
} from '../utils/constants';

export const Overview = (): ReactElement => {
  // data handlers
  const [minAge, setMinAge] = useState<number>(INITIAL_MIN);
  const [maxAge, setMaxAge] = useState<number>(INITIAL_MAX);

  // timer handlers
  const [refreshKey, setRefreshKey] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer>();
  const handleClick = useCallback(() => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(undefined);
      setRefreshKey(0);
      return;
    }

    const newIntervalId = setInterval(() => {
      setRefreshKey((prevCount) => prevCount + 1);
    }, TIME_INTERVAL);
    setIntervalId(newIntervalId);
  }, [intervalId]);

  return (
    <OverviewWrapper>
      {refreshKey}
      <FifaChart
        maxAge={maxAge}
        minAge={minAge}
        refreshKey={refreshKey}
        setMaxAge={setMaxAge}
        setMinAge={setMinAge}
      />
      <ControlsBarWrapper>
        <Button onClick={handleClick} variant="primary">
          {PLAY_BTN_LABEL}
        </Button>
        {refreshKey > 0 && (
          <AgeLabelWrapper>{`Age: ${minAge}-${maxAge}`}</AgeLabelWrapper>
        )}
      </ControlsBarWrapper>
    </OverviewWrapper>
  );
};
