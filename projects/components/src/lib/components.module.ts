import { NgModule, inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons/faAddressCard';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons/faEllipsisVertical';
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons/faSkullCrossbones';
import { PaginatorTexts } from './paginator-texts';

@NgModule({
  imports: [
    BrowserAnimationsModule,
  ],
  exports: [
    MatDialogModule,
  ],
  providers: [
    { provide: MatPaginatorIntl, useClass: PaginatorTexts },
  ],
})
export class ComponentsModule {
  constructor() {
    const library = inject(FaIconLibrary);

    library.addIcons(faAddressCard);
    library.addIcons(faSkullCrossbones);
    library.addIcons(faEllipsisVertical);
  }
}
