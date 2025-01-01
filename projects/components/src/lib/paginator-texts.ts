import { Injectable, inject } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';

@Injectable()
export class PaginatorTexts implements MatPaginatorIntl {
  private readonly translate = inject(TranslateService);

  readonly changes = new Subject<void>();

  get itemsPerPageLabel(): string {
    return this.translate.instant('bpa.components.table.items-per-page');
  }

  get firstPageLabel(): string {
    return this.translate.instant('bpa.components.table.first-page');
  }

  get lastPageLabel(): string {
    return this.translate.instant('bpa.components.table.last-page');
  }

  get nextPageLabel(): string {
    return this.translate.instant('bpa.components.table.next-page');
  }

  get previousPageLabel(): string {
    return this.translate.instant('bpa.components.table.previous-page');
  }

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return '';
    }
    const amountPages = Math.ceil(length / pageSize);
    return this.translate.instant('bpa.components.table.page', { page: page + 1, amountPages });
  }
}
