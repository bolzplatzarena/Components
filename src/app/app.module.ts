import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyProgressBarModule as MatProgressBarModule } from '@angular/material/legacy-progress-bar';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule, DialogModule } from '@bolzplatzarena/components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { DialogsComponent } from './components/dialogs/dialogs.component';
import { CommonDialogComponent } from './components/dialogs/examples/common-dialog/common-dialog.component';
import { SimpleFormDialogComponent } from './components/dialogs/examples/form-dialog/form-dialog.component';
import { SimpleComponent } from './components/dialogs/examples/simple/simple.component';
import { EnumComponent } from './components/enum/enum.component';
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
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ComponentsModule,
    DialogModule,
    TranslateModule.forRoot(),
    MatSelectModule,
    MatTabsModule,
    FontAwesomeModule,
    MatProgressBarModule,
    MatButtonToggleModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(translate: TranslateService) {
    translate.setTranslation('en', en, true);
    translate.setTranslation('de', de, true);
    translate.use('de');
  }
}
