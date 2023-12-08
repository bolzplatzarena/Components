import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, OnChanges, Output } from '@angular/core';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { ColumnConfig, InnerTableComponent } from './inner-table/inner-table.component';

@Component({
  selector: 'bpa-table',
  templateUrl: './table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, InnerTableComponent],
})
export class TableComponent<T> implements OnChanges {
  @HostBinding() protected readonly class = 'tw-flex tw-flex-1 tw-flex-col';

  @Input() columns !: string[];
  @Input() dataset: T[] | undefined | null = [];
  @Input() translateKey = 'core.components.table.';
  @Input() columnConfig: { [key: string]: ColumnConfig<T> } | undefined;
  @Input() progressBar: 'always' | 'never' | 'auto' = 'always';
  @Input() sortable = true;
  @Input() paging = true;
  @Input() deleteIcon: IconName = 'skull-crossbones';
  @Input() editIcon: IconName = 'address-card';
  @Input() pageSizeOptions = [10, 20, 50];

  @Output() readonly deleteEvent = new EventEmitter<T>();
  @Output() readonly editEvent = new EventEmitter<T>();

  protected loading = true;
  protected edit = false;
  protected delete = false;

  protected displayedColumns!: string[];
  protected innerData: T[] | undefined | null = [];

  protected get progress(): boolean {
    return (this.progressBar === 'always')
      || ((this.progressBar === 'auto') && this.loading);
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

  protected deleteAction(item: T): void {
    this.deleteEvent.emit(item);
  }

  protected editAction(item: T): void {
    this.editEvent.emit(item);
  }
}
