import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IconName } from '@fortawesome/fontawesome-svg-core';

export enum ColumnType {
  Date,
}

export interface ColumnConfig {
  type: ColumnType,
}

@Component({
  selector: 'bpa-table',
  templateUrl: './table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent<T> implements OnChanges {
  @Input() columns !: string[];
  @Input() dataset: T[] | undefined | null = [];
  @Input() translateKey = 'core.components.table.';
  @Input() columnConfig: { [key: string]: ColumnConfig } | undefined;

  @Input() deleteIcon: IconName = 'skull-crossbones';
  @Input() editIcon: IconName = 'address-card';

  @Output() readonly deleteEvent = new EventEmitter<T>();
  @Output() readonly editEvent = new EventEmitter<T>();

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
  }

  deleteAction(item: T): void {
    this.deleteEvent.emit(item);
  }

  editAction(item: T): void {
    this.editEvent.emit(item);
  }
}
