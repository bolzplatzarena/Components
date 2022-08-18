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

  @Input() progressBar: 'always' | 'never' | 'auto' = 'always';
  @Input() sortable = true;
  @Input() deleteIcon: IconName = 'skull-crossbones';
  @Input() editIcon: IconName = 'address-card';

  @Output() readonly deleteEvent = new EventEmitter<T>();
  @Output() readonly editEvent = new EventEmitter<T>();

  loading = true;
  edit = false;
  delete = false;

  displayedColumns!: string[];
  innerData: T[] | undefined | null = [];

  get progress(): boolean {
    return this.progressBar === 'always' || (this.progressBar === 'auto' && this.loading);
  }

  ngOnChanges(): void {
    this.delete = this.deleteEvent.observed;
    this.edit = this.editEvent.observed;

    this.displayedColumns = [...this.columns];
    if (this.delete || this.edit) {
      this.displayedColumns.push('actions');
    }

    this.loading = !this.dataset;
    if (!this.loading) {
      this.innerData = this.dataset;
    }
  }

  deleteAction(item: T): void {
    this.deleteEvent.emit(item);
  }

  editAction(item: T): void {
    this.editEvent.emit(item);
  }
}
