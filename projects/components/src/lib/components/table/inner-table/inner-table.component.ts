import { DatePipe, LowerCasePipe, NgForOf, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  ViewChild,
} from '@angular/core';
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
  Number = 2
}

export interface ColumnConfig<T> {
  type: ColumnType,
  args?: Dictionary<unknown>,
  getter?: (item: T) => string | number,
  cssClass?: string,
}

@Component({
  selector: 'bpa-inner-table',
  templateUrl: './inner-table.component.html',
  styleUrls: ['../../../../../../styles/tailwind.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
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
    NgIf,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    TranslateModule,
    NgForOf,
  ],
})
export class InnerTableComponent<T> implements OnChanges, AfterViewInit {
  @Input() columns !: string[];
  @Input() dataset: T[] = [];
  @Input() translateKey = 'core.components.table.';
  @Input() sortable = true;
  @Input() paging = true;
  @Input() displayedColumns: string[] = [];
  @Input() columnConfig: { [key: string]: ColumnConfig<T> } | undefined;
  @Input() deleteIcon: IconName = 'skull-crossbones';
  @Input() editIcon: IconName = 'address-card';
  @Input() edit = false;
  @Input() delete = false;
  @Input() rowClickedObserved = false;
  @Input() progress = false;
  @Input() loading = true;
  @Input() pageSizeOptions = [10, 20, 50];

  @Output() readonly deleteEvent = new EventEmitter<T>();
  @Output() readonly editEvent = new EventEmitter<T>();
  @Output() readonly rowClicked = new EventEmitter<T>();

  @ViewChild(MatPaginator) private readonly paginator !: MatPaginator;
  @ViewChild(MatSort) private readonly sort !: MatSort;

  protected readonly ColumnType = ColumnType;

  protected dataSource !: MatTableDataSource<T>;

  ngOnChanges(): void {
    this.dataSource = new MatTableDataSource<T>(this.dataset);
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (item: T, property: string): string | number => this.getSortingAccessor(item, property);
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  protected deleteAction(item: T): void {
    this.deleteEvent.emit(item);
  }

  protected editAction(item: T): void {
    this.editEvent.emit(item);
  }

  private getSortingAccessor(item: T, property: string): string | number {
    if (this.columnConfig?.[property]?.getter) {
      return this.columnConfig[property].getter !(item);
    }
    switch (this.columnConfig?.[property]?.type) {
      case ColumnType.Number:
        return Number(item[property as keyof T]);
    }
    return String(item[property as keyof T]);
  }
}
