import { ReactElement, useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import Plot from 'react-plotly.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  CHART_HEIGHT,
  CHART_TITLE,
  CHART_WIDTH,
  X_AXIS_TITLE,
  Y_AXIS_TITLE,
} from '../utils/constants';
import { ChartData, FifaChartProps } from '../utils/types';
import { GROUPS } from '../mock-data/groups';

export const FifaChart = ({ refreshKey }: FifaChartProps): ReactElement => {
  // chart handlers
  const [activeGroup, setActiveGroup] = useState<ChartData>(GROUPS[0]);
  const [index, setIndex] = useState<number>(0);
  useEffect(() => {
    if (index < GROUPS.length) {
      setActiveGroup(GROUPS[index]);
      setIndex((prev) => prev + 1);
    } else {
      setActiveGroup(GROUPS[0]);
      setIndex(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshKey]);

  // modal handlers
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState<string>('');
  const [photo, setPhoto] = useState<string>('');
  const [club, setClub] = useState<string>('');
  const [nationality, setNationality] = useState<string>('');

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
            customdata: [...(activeGroup.customdata as string[])],
          },
        ]}
        layout={{
          width: CHART_WIDTH,
          height: CHART_HEIGHT,
          title: CHART_TITLE,
          xaxis: { title: { text: X_AXIS_TITLE } },
          yaxis: { title: { text: Y_AXIS_TITLE } },
        }}
        onClick={(e) => {
          const metaData = e.points[0].customdata as string;
          if (metaData) {
            const player = JSON.parse(metaData);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            setName(e.points[0].text);
            setPhoto(player.photo);
            setClub(player.club);
            setNationality(player.nationality);
            handleShow();
          }
        }}
      />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={photo} alt={name} />
          <div>Club: {club}</div>
          <div>nationality: {nationality}</div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
