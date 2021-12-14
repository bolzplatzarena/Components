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
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { Dictionary } from '../../models/dictionary.model';

export enum ColumnType {
  Date,
  Enum,
}

export interface ColumnConfig {
  type: ColumnType,
  args?: Dictionary<unknown>,
}

@Component({
  selector: 'bpa-table',
  templateUrl: './table.component.html',
  styleUrls: ['../../../../../styles/tailwind.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent<T> implements OnChanges, AfterViewInit {
  @Input() columns !: string[];
  @Input() dataset: T[] | undefined | null = [];
  @Input() translateKey = 'core.components.table.';
  @Input() columnConfig: { [key: string]: ColumnConfig } | undefined;

  @Input() sortable = true;
  @Input() deleteIcon: IconName = 'skull-crossbones';
  @Input() editIcon: IconName = 'address-card';

  @Output() readonly deleteEvent = new EventEmitter<T>();
  @Output() readonly editEvent = new EventEmitter<T>();

  @ViewChild(MatSort) sort !: MatSort;

  edit = false;
  delete = false;

  dataSource !: MatTableDataSource<T>;
  displayedColumns: string[] = [];
  readonly ColumnType = ColumnType;

  ngOnChanges(): void {
    this.displayedColumns = [...this.columns];

    this.delete = !!this.deleteEvent.observers.length;
    this.edit = !!this.editEvent.observers.length;

    if (this.delete || this.edit) {
      this.displayedColumns.push('actions');
    }

    this.dataSource = new MatTableDataSource<T>(this.dataset ?? []);
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  deleteAction(item: T): void {
    this.deleteEvent.emit(item);
  }

  editAction(item: T): void {
    this.editEvent.emit(item);
  }
}
