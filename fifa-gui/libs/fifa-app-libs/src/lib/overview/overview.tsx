import { ReactElement, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  AgeLabelWrapper,
  ControlsBarWrapper,
  OverviewWrapper,
} from '../utils/styles';
import { FifaChart } from '../fifa-chart/fifa-chart';
import {
  FINAL_MAX,
  INITIAL_MAX,
  INITIAL_MIN,
  PLAY_BTN_LABEL,
  TIME_INTERVAL,
} from '../utils/constants';
import { getNormData } from '../mock-data/get-norm-data';
import { getGroup } from '../utils/get-group';
import { Player } from '../utils/types';

const normData = getNormData();

export const Overview = (): ReactElement => {
  // data handlers
  const [minAge, setMinAge] = useState<number>(INITIAL_MIN);
  const [maxAge, setMaxAge] = useState<number>(INITIAL_MAX);
  const [group, setGroup] = useState<Player[]>([]);

  // timer handlers
  const [count, setCount] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer>();
  const handleClick = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(undefined);
      return;
    }

    const newIntervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    setIntervalId(newIntervalId);
  };

  return (
    <OverviewWrapper>
      {count}
      <FifaChart data={group} />
      <ControlsBarWrapper>
        <Button onClick={handleClick} variant="primary">
          {PLAY_BTN_LABEL}
        </Button>
        {group.length > 0 && (
          <AgeLabelWrapper>{`Age: ${minAge}-${maxAge}`}</AgeLabelWrapper>
        )}
      </ControlsBarWrapper>
    </OverviewWrapper>
  );
};
