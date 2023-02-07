import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule, DialogModule } from '@bolzplatzarena/components';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons/faEllipsisVertical';
import { faFile } from '@fortawesome/free-solid-svg-icons/faFile';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { DialogsComponent } from './components/dialogs/dialogs.component';
import { CommonDialogComponent } from './components/dialogs/examples/common-dialog/common-dialog.component';
import { SimpleFormDialogComponent } from './components/dialogs/examples/form-dialog/form-dialog.component';
import { SimpleComponent } from './components/dialogs/examples/simple/simple.component';
import { EnumComponent } from './components/enum/enum.component';
import { FileListComponent } from './components/file-list/file-list.component';
import { TableComponent } from './components/table/table.component';

import * as de from './i18n/de.json';
import * as en from './i18n/en.json';

@NgModule({
  declarations: [
    AppComponent,
    CommonDialogComponent,
    DialogsComponent,
    EnumComponent,
    SimpleComponent,
    SimpleFormDialogComponent,
    TableComponent,
    FileListComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ComponentsModule,
    DialogModule,
    TranslateModule.forRoot(),
    FontAwesomeModule,
    MatButtonToggleModule,
    MatIconModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary, translate: TranslateService) {
    translate.setTranslation('en', en, true);
    translate.setTranslation('de', de, true);
    translate.use('de');

    library.addIcons(faFile);
    library.addIcons(faEllipsisVertical);
    library.addIcons(faTrash);
  }
}
