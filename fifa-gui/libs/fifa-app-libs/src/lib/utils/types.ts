export type Player = {
  age: number;
  club: string;
  id: string;
  name: string;
  nationality: string;
  overall: number;
  photo: string;
  wage: number;
};

export type ChartPoint = {
  x: number;
  y: number;
};
export type ChartData = {
  id: string;
  data: ChartPoint[];
};

export interface FifaChartProps {
  data: Player[];
}
export interface NormData {
  [key: string]: Player;
}
