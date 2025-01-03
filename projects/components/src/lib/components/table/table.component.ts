import { ChangeDetectionStrategy, Component, HostBinding, input, OnChanges, output } from '@angular/core';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { ColumnConfig, InnerTableComponent } from './inner-table/inner-table.component';

@Component({
  selector: 'bpa-table',
  templateUrl: './table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [InnerTableComponent],
})
export class TableComponent<T> implements OnChanges {
  @HostBinding() protected readonly class = 'tw-flex tw-flex-1 tw-flex-col';

  readonly columns = input.required<string[]>();
  readonly dataset = input<T[] | undefined | null>([]);
  readonly translateKey = input('core.components.table.');
  readonly columnConfig = input<{
    [key: string]: ColumnConfig<T>;
  }>();
  readonly progressBar = input<'always' | 'never' | 'auto'>('always');
  readonly sortable = input(true);
  readonly paging = input(true);
  readonly deleteIcon = input<IconName>('skull-crossbones');
  readonly editIcon = input<IconName>('address-card');
  readonly pageSizeOptions = input([10, 20, 50]);

  readonly actions = input<{ delete: boolean; edit: boolean; rowClicked: boolean }>({
    delete: false,
    edit: false,
    rowClicked: false,
  });

  readonly rowClicked = output<T>();
  readonly deleteEvent = output<T>();
  readonly editEvent = output<T>();

  protected loading = true;
  protected displayedColumns!: string[];
  protected innerData: T[] | undefined | null = [];

  protected get progress(): boolean {
    const progressBar = this.progressBar();
    return progressBar === 'always' || (progressBar === 'auto' && this.loading);
  }

  ngOnChanges(): void {
    this.displayedColumns = [...this.columns()];
    if (this.actions().delete || this.actions().edit) {
      this.displayedColumns.push('actions');
    }

    this.loading = !this.dataset();
    if (!this.loading) {
      this.innerData = this.dataset();
    }
  }

  protected deleteAction(item: T): void {
    this.deleteEvent.emit(item);
  }

  protected editAction(item: T): void {
    this.editEvent.emit(item);
  }
}
