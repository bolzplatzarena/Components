import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from '@bolzplatzarena/components';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AppComponent } from './app.component';

import * as en from './i18n/en.json';
import { TableComponent } from './components/table/table.component';
import { EnumComponent } from './components/enum/enum.component';
import { MatTabsModule } from "@angular/material/tabs";

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    EnumComponent,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    NoopAnimationsModule,
    TranslateModule.forRoot(),
    MatSelectModule,
    MatTabsModule,
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
