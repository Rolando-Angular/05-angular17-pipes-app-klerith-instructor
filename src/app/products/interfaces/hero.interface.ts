export enum Color {
  RED, BLACK, BLUE, GREEN
}

export interface Hero {
  name: string;
  canFly: boolean;
  color: Color;
}
