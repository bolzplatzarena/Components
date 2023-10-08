import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons/faAddressCard';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons/faEllipsisVertical';
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons/faSkullCrossbones';
import { TranslateModule } from '@ngx-translate/core';
import { InnerTableComponent } from './components/table/inner-table/inner-table.component';
import { TableComponent } from './components/table/table.component';
import { PaginatorTexts } from './paginator-texts';
import { EnumKeyPipe } from './pipes/enum-key.pipe';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FontAwesomeModule,
    MatButtonModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSortModule,
    MatTableModule,
    TranslateModule,
    MatMenuModule,
    MatIconModule,
    EnumKeyPipe,
    TableComponent,
    InnerTableComponent,
  ],
  exports: [
    MatDialogModule,
  ],
  providers: [
    { provide: MatPaginatorIntl, useClass: PaginatorTexts },
  ],
})
export class ComponentsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faAddressCard);
    library.addIcons(faSkullCrossbones);
    library.addIcons(faEllipsisVertical);
  }
}
