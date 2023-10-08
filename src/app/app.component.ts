import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons/faEllipsisVertical';
import { faFile } from '@fortawesome/free-solid-svg-icons/faFile';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { TranslateService } from '@ngx-translate/core';
import { DialogsComponent } from './components/dialogs/dialogs.component';
import { EnumComponent } from './components/enum/enum.component';
import { FileListComponent } from './components/file-list/file-list.component';
import { TableComponent } from './components/table/table.component';
import * as de from './i18n/de.json';
import * as en from './i18n/en.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatButtonToggleModule,
    MatTabsModule,
    TableComponent,
    DialogsComponent,
    EnumComponent,
    FileListComponent,
  ],
})
export class AppComponent {
  constructor(library: FaIconLibrary, private readonly translate: TranslateService) {
    translate.setTranslation('en', en, true);
    translate.setTranslation('de', de, true);
    translate.use('de');

    library.addIcons(faFile);
    library.addIcons(faEllipsisVertical);
    library.addIcons(faTrash);
  }

  setLanguage(lang: string): void {
    this.translate.use(lang);
  }
}
