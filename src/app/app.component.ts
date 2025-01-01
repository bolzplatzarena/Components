import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {StrapiRendererComponent} from '@bolzplatzarena/components/strapi';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons/faEllipsisVertical';
import {faFile} from '@fortawesome/free-solid-svg-icons/faFile';
import {faTrash} from '@fortawesome/free-solid-svg-icons/faTrash';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {DialogsComponent} from './components/dialogs/dialogs.component';
import {EnumComponent} from './components/enum/enum.component';
import {FileListComponent} from './components/file-list/file-list.component';
import {FullTableComponent} from './components/full-table/full-table.component';
import {LoadingComponent} from './components/loading/loading.component';
import {TableComponent} from './components/table/table.component';
import * as de from './i18n/de.json';
import * as en from './i18n/en.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatButtonToggleModule,
    MatTabsModule,
    TableComponent,
    DialogsComponent,
    EnumComponent,
    FileListComponent,
    TranslateModule,
    FullTableComponent,
    LoadingComponent,
    StrapiRendererComponent,
  ]
})
export class AppComponent {
  private readonly translate = inject(TranslateService);

  constructor() {
    const library = inject(FaIconLibrary);
    const translate = this.translate;

    translate.setTranslation('en', en, true);
    translate.setTranslation('de', de, true);
    translate.use('de');

    library.addIcons(faFile);
    library.addIcons(faEllipsisVertical);
    library.addIcons(faTrash);
  }

  protected setLanguage(lang: string): void {
    this.translate.use(lang);
  }
}
