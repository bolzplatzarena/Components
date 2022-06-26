import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from '@bolzplatzarena/components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { EnumComponent } from './components/enum/enum.component';
import { TableComponent } from './components/table/table.component';

import * as en from './i18n/en.json';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    EnumComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ComponentsModule,
    TranslateModule.forRoot(),
    MatSelectModule,
    MatTabsModule,
    FontAwesomeModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(translate: TranslateService) {
    translate.setTranslation('en', en, true);
    translate.use('en');
  }
}
