import { DatePipe, LowerCasePipe } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, OnChanges, input, output, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { TranslateModule } from '@ngx-translate/core';
import { Dictionary } from '../../../models/dictionary.model';
import { EnumKeyPipe } from '../../../pipes/enum-key.pipe';

export enum ColumnType {
  Unknown = -1,
  Date = 0,
  Enum = 1,
  Number = 2,
}

export interface ColumnConfig<T> {
  type: ColumnType;
  args?: Dictionary<unknown>;
  getter?: (item: T) => string | number;
  cssClass?: string;
}

@Component({
  selector: 'bpa-inner-table',
  templateUrl: './inner-table.component.html',
  styleUrls: ['../../../../../../styles/tailwind.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DatePipe,
    EnumKeyPipe,
    FontAwesomeModule,
    LowerCasePipe,
    MatButtonModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSortModule,
    MatTableModule,
    TranslateModule,
  ],
})
export class InnerTableComponent<T> implements OnChanges, AfterViewInit {
  readonly columns = input.required<string[]>();
  readonly dataset = input<T[]>([]);
  readonly translateKey = input('core.components.table.');
  readonly sortable = input(true);
  readonly paging = input(true);
  readonly displayedColumns = input<string[]>([]);
  readonly columnConfig = input<{
    [key: string]: ColumnConfig<T>;
  }>();
  readonly deleteIcon = input<IconName>('skull-crossbones');
  readonly editIcon = input<IconName>('address-card');
  readonly edit = input(false);
  readonly delete = input(false);
  readonly rowClickedObserved = input(false);
  readonly progress = input(false);
  readonly loading = input(true);
  readonly pageSizeOptions = input([10, 20, 50]);

  readonly deleteEvent = output<T>();
  readonly editEvent = output<T>();
  readonly rowClicked = output<T>();

  readonly paginator = viewChild.required(MatPaginator);
  readonly sort = viewChild.required(MatSort);

  protected readonly ColumnType = ColumnType;

  protected dataSource!: MatTableDataSource<T>;

  ngOnChanges(): void {
    this.dataSource = new MatTableDataSource<T>(this.dataset());
    this.dataSource.sort = this.sort();
    this.dataSource.sortingDataAccessor = (item: T, property: string): string | number => this.getSortingAccessor(item, property);
    this.dataSource.paginator = this.paginator();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort();
    this.dataSource.paginator = this.paginator();
  }

  protected deleteAction(item: T): void {
    this.deleteEvent.emit(item);
  }

  protected editAction(item: T): void {
    this.editEvent.emit(item);
  }

  private getSortingAccessor(item: T, property: string): string | number {
    const columnConfig = this.columnConfig();
    if (columnConfig?.[property]?.getter) {
      return columnConfig[property].getter!(item);
    }
    switch (columnConfig?.[property]?.type) {
      case ColumnType.Number:
        return Number(item[property as keyof T]);
    }
    return String(item[property as keyof T]);
  }
}
