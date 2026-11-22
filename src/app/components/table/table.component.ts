import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ColumnConfig, ColumnType, TableComponent as TableComponentFromLib } from '@bolzplatzarena/components';
import { TranslatePipe } from '@ngx-translate/core';
import { delay, interval, mergeMap, of, startWith } from 'rxjs';
import { Hero } from '../../models/hero';
import { HEROES } from '../../models/heroes';
import { CodeBlockComponent } from '../code-block/code-block.component';
import { HeroType } from '../../models/hero-type';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, CodeBlockComponent, TableComponentFromLib, TranslatePipe],
})
export class TableComponent {
  protected readonly configExample = `protected readonly config: { [key: string]: ColumnConfig<Hero> } = {
  birthday: { type: ColumnType.Date },
  type: { type: ColumnType.Enum, args: HeroType },
  level: { type: ColumnType.Number, cssClass: 'tw-w-32' },
  custom: { type: ColumnType.Unknown, getter: (hero: Hero) => \`\${hero.name} \${hero.level}\` },
};`;
  protected readonly staticExample = `<bpa-table
  [columns]="['name', 'level', 'type', 'health', 'birthday']"
  [columnConfig]="config"
  [dataset]="data"
  [pageSizeOptions]="[7, 14, 21]"
  [actions]="{ delete: true, edit: true, rowClicked: true }"
  (deleteEvent)="delete($event)"
  (editEvent)="edit($event)"
  (rowClicked)="view($event)"
  translateKey="hero.components.hero-list.">
</bpa-table>`;
  protected readonly noPagingExample = `<bpa-table [columns]="columns" [dataset]="data" [paging]="false"></bpa-table>`;
  protected readonly observableExample = `<bpa-table [columns]="columns" [dataset]="data$ | async" progressBar="always"></bpa-table>`;

  protected readonly data = HEROES;
  protected readonly config: { [key: string]: ColumnConfig<Hero> } = {
    name: { type: ColumnType.Unknown, cssClass: 'tw-w-32' },
    birthday: { type: ColumnType.Date, cssClass: 'tw-w-32' },
    type: { type: ColumnType.Enum, args: HeroType, cssClass: 'tw-w-32' },
    level: { type: ColumnType.Number, cssClass: 'tw-w-32' },
    health: { type: ColumnType.Number, cssClass: 'tw-w-32' },
    custom: { type: ColumnType.Unknown, getter: (hero: Hero) => `${hero.name} ${hero.level}` },
  };
  protected readonly data$ = interval(3000).pipe(
    mergeMap(() => of(this.data).pipe(delay(1500), startWith(null))),
    takeUntilDestroyed(),
  );

  protected die(hero: Hero): void {
    alert(`Die: ${hero.name}`);
  }

  protected view(hero: Hero): void {
    alert(`View: ${hero.name}`);
  }
}
