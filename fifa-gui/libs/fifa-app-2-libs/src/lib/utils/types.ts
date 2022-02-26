export type Player = {
  name: string;
  id: string;
  age: number;
  photo: string;
  nationality: string;
  overall: number;
  club: string;
  wage: number;
};

export type NormData = {
  [key: string]: Player[];
};

export type ChartData = {
  x: number[];
  y: number[];
  text: string[];
};
