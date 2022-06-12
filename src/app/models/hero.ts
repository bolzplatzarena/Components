import { HeroType } from "./hero-type";

export interface Hero {
  name: string;
  level: number;
  type: HeroType;
  health: number;
  birthday: Date;
}
