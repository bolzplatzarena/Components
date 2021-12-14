import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons/faAddressCard';
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons/faSkullCrossbones';
import { TranslateModule } from '@ngx-translate/core';
import { TableComponent } from './components/table/table.component';
import { EnumKeyPipe } from './pipes/enum-key.pipe';

@NgModule({
  declarations: [
    TableComponent,
    EnumKeyPipe,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatButtonModule,
    MatProgressBarModule,
    MatTableModule,
    TranslateModule,
    MatSortModule,
  ],
  exports: [
    TableComponent,
  ],
})
export class ComponentsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faAddressCard);
    library.addIcons(faSkullCrossbones);
  }
}
