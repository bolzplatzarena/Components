import { NgModule } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from '@bolzplatzarena/components';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AppComponent } from './app.component';

import * as de from './i18n/de.json';
import * as en from './i18n/en.json';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    NoopAnimationsModule,
    TranslateModule.forRoot(),
    MatSelectModule,
    MatButtonToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(translate: TranslateService) {
    translate.setTranslation('en', en, true);
    translate.setTranslation('de', de, true);
    translate.use('en');
  }
}
