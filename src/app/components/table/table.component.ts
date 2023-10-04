import { ChangeDetectionStrategy, Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ColumnConfig, ColumnType } from '@bolzplatzarena/components';
import { delay, interval, mergeMap, of, startWith } from 'rxjs';
import { Hero } from '../../models/hero';
import { HeroType } from '../../models/hero-type';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
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
  readonly config: { [key: string]: ColumnConfig<Hero> } = {
    'name': { type: ColumnType.Unknown, cssClass: 'tw-w-32' },
    'birthday': { type: ColumnType.Date, cssClass: 'tw-w-32' },
    'type': { type: ColumnType.Enum, args: HeroType, cssClass: 'tw-w-32' },
    'level': { type: ColumnType.Number, cssClass: 'tw-w-32' },
    'health': { type: ColumnType.Number, cssClass: 'tw-w-32' },
    'custom': { type: ColumnType.Unknown, getter: (hero: Hero) => `${hero.name} ${hero.level}` },
  };
  readonly data$ = interval(3000).pipe(
    mergeMap(() => of(this.data).pipe(
      delay(1500),
      startWith(null),
    )),
    takeUntilDestroyed(),
  );

  die(): void {
    alert('Die');
  }

  view(): void {
    alert('View');
  }
}
