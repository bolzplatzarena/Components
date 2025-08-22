import { inject, NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons/faAddressCard';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons/faEllipsisVertical';
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons/faSkullCrossbones';
import { PaginatorTexts } from './paginator-texts';

@NgModule({
  exports: [MatDialogModule],
  providers: [{ provide: MatPaginatorIntl, useClass: PaginatorTexts }],
})
export class ComponentsModule {
  constructor() {
    const library = inject(FaIconLibrary);

    library.addIcons(faAddressCard);
    library.addIcons(faSkullCrossbones);
    library.addIcons(faEllipsisVertical);
  }
}
