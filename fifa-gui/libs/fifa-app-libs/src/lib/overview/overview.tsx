import { ReactElement } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FifaChart } from '../fifa-chart/fifa-chart';
import { ControlsBarWrapper, OverviewWrapper } from '../utils/styles';
import { PLAY_BTN_ID, PLAY_BTN_LABEL } from '../utils/constants';
// import { getAgeGroupPlayers } from '../mock-data/get-age-group-players';

export const Overview = (): ReactElement => {
  return (
    <OverviewWrapper>
      <FifaChart />
      <ControlsBarWrapper>
        <Button data-testId={PLAY_BTN_ID} variant="primary">
          {PLAY_BTN_LABEL}
        </Button>
        <div>AAA</div>
      </ControlsBarWrapper>
    </OverviewWrapper>
  );
};
