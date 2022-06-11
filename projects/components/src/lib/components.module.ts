import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons/faAddressCard';
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons/faSkullCrossbones';
import { TranslateModule } from '@ngx-translate/core';
import { TableComponent } from './components/table/table.component';
import { PaginatorTexts } from './paginator-texts';
import { EnumKeyPipe } from './pipes/enum-key.pipe';

@NgModule({
  declarations: [
    EnumKeyPipe,
    TableComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatButtonModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSortModule,
    MatTableModule,
    TranslateModule,
  ],
  exports: [
    EnumKeyPipe,
    TableComponent,
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: PaginatorTexts }],
})
export class ComponentsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faAddressCard as unknown as any);
    library.addIcons(faSkullCrossbones as unknown as any);
  }
}
