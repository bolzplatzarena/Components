import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ColumnConfig, ColumnType, TableComponent as TableComponentFromLib } from '@bolzplatzarena/components/table';
import { Hero } from '../../models/hero';
import { HEROES } from '../../models/heroes';
import { HeroType } from '../../models/hero-type';

@Component({
  selector: 'app-full-table',
  templateUrl: './full-table.component.html',
  styleUrl: './full-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TableComponentFromLib],
})
export class FullTableComponent {
  // 8 copies so the table needs paging and scrolling
  protected readonly data: Hero[] = Array.from({ length: 8 }, () => HEROES.map(hero => ({ ...hero }))).flat();
  protected readonly config: { [key: string]: ColumnConfig<Hero> } = {
    name: { type: ColumnType.Unknown, cssClass: 'tw-w-32' },
    birthday: { type: ColumnType.Date, cssClass: 'tw-w-32' },
    type: { type: ColumnType.Enum, args: HeroType, cssClass: 'tw-w-32' },
    level: { type: ColumnType.Number, cssClass: 'tw-w-32' },
    health: { type: ColumnType.Number, cssClass: 'tw-w-32' },
    custom: { type: ColumnType.Unknown, getter: (hero: Hero) => `${hero.name} ${hero.level}` },
  };
}
