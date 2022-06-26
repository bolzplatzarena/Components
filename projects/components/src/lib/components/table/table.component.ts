import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { ColumnConfig } from './inner-table/inner-table.component';

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

  @Input() sortable = true;
  @Input() deleteIcon: IconName = 'skull-crossbones';
  @Input() editIcon: IconName = 'address-card';

  @Output() readonly deleteEvent = new EventEmitter<T>();
  @Output() readonly editEvent = new EventEmitter<T>();


  edit = false;
  delete = false;

  displayedColumns!: string[];

  ngOnChanges(): void {
    this.delete = this.deleteEvent.observed;
    this.edit = this.editEvent.observed;

    this.displayedColumns = [...this.columns];
    if (this.delete || this.edit) {
      this.displayedColumns.push('actions');
    }
  }

  deleteAction(item: T): void {
    this.deleteEvent.emit(item);
  }

  editAction(item: T): void {
    this.editEvent.emit(item);
  }
}
