import { Component } from '@angular/core';
import { ColumnConfig, ColumnType, translatableFrom } from '@bolzplatzarena/components';

enum HeroType {
  Fighter,
  Hammer,
  Scientist,
  Spy
}

interface Hero {
  name: string;
  level: number;
  type: HeroType;
  health: number;
  birthday: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  readonly data: Hero[] = [
    {
      name: 'Thor',
      level: 100,
      type: HeroType.Hammer,
      health: 1000,
      birthday: new Date(1970, 11, 14),
    },
    {
      name: 'Captain',
      level: 100,
      type: HeroType.Fighter,
      health: 1000,
      birthday: new Date(1930, 1, 1),
    },
    {
      name: 'Captain America',
      level: 100,
      type: HeroType.Fighter,
      health: 12000,
      birthday: new Date(1934, 8, 18),
    },
    {
      name: 'Nick Fury',
      level: 100,
      type: HeroType.Fighter,
      health: 10400,
      birthday: new Date(1932, 7, 1),
    },
    {
      name: 'Black Window',
      level: 120,
      type: HeroType.Spy,
      health: 2000,
      birthday: new Date(1931, 1, 1),
    },
    {
      name: 'Iron Man',
      level: 80,
      type: HeroType.Scientist,
      health: 3000,
      birthday: new Date(1931, 1, 1),
    },
    {
      name: 'Hulk',
      level: 120,
      type: HeroType.Fighter,
      health: 1000,
      birthday: new Date(1931, 1, 23),
    },
    {
      name: 'Doc Brown',
      level: 120,
      type: HeroType.Scientist,
      health: 1000,
      birthday: new Date(1931, 1, 12),
    },
    {
      name: 'Spider Man',
      level: 120,
      type: HeroType.Fighter,
      health: 4000,
      birthday: new Date(1991, 3, 1),
    },
    {
      name: 'Hawk Eye',
      level: 110,
      type: HeroType.Fighter,
      health: 6000,
      birthday: new Date(1991, 2, 1),
    },
    {
      name: 'Loki',
      level: 110,
      type: HeroType.Fighter,
      health: 1000,
      birthday: new Date(1991, 1, 1),
    },
  ];
  readonly config: { [key: string]: ColumnConfig } = {
    'birthday': { type: ColumnType.Date },
    'type': { type: ColumnType.Enum, args: HeroType },
  };

  readonly items = translatableFrom(HeroType, 'hero.types');
  readonly HeroType = HeroType;

  die(): void {
    alert('Die');
  }

  view() {
    alert('View');
  }
}
