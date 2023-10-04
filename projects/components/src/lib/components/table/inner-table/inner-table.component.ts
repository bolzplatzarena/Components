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
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { Dictionary } from '../../../models/dictionary.model';

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
})
export class InnerTableComponent<T> implements OnChanges, AfterViewInit {
  @Input() columns !: string[];
  @Input() dataset: T[] = [];
  @Input() translateKey = 'core.components.table.';
  @Input() sortable = true;
  @Input() displayedColumns: string[] = [];
  @Input() columnConfig: { [key: string]: ColumnConfig<T> } | undefined;
  @Input() deleteIcon: IconName = 'skull-crossbones';
  @Input() editIcon: IconName = 'address-card';
  @Input() edit = false;
  @Input() delete = false;
  @Input() progress = false;
  @Input() loading = true;
  @Input() pageSizeOptions = [10, 20, 50];

  @Output() readonly deleteEvent = new EventEmitter<T>();
  @Output() readonly editEvent = new EventEmitter<T>();

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  readonly ColumnType = ColumnType;

  dataSource !: MatTableDataSource<T>;

  ngOnChanges(): void {
    this.dataSource = new MatTableDataSource<T>(this.dataset);
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (item: T, property: string) => this.getSortingAccessor(item, property);
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  deleteAction(item: T): void {
    this.deleteEvent.emit(item);
  }

  editAction(item: T): void {
    this.editEvent.emit(item);
  }

  getSortingAccessor(item: T, property: string): string | number {
    if (this.columnConfig?.[property]?.getter) {
      return this.columnConfig[property].getter !(item);
    }
    switch (this.columnConfig?.[property]?.type) {
      case ColumnType.Number:
        return Number(item[property as keyof T]) ?? 0;
    }
    return String(item[property as keyof T]) ?? '';
  }
}
