import { NgModule } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons/faEllipsisVertical';
import { faFile } from '@fortawesome/free-solid-svg-icons/faFile';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { TranslateService } from '@ngx-translate/core';

import * as de from './i18n/de.json';
import * as en from './i18n/en.json';

@NgModule()
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
