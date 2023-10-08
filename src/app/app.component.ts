import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { FileListComponent } from './components/file-list/file-list.component';
import { EnumComponent } from './components/enum/enum.component';
import { DialogsComponent } from './components/dialogs/dialogs.component';
import { TableComponent } from './components/table/table.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        MatButtonToggleModule,
        TranslateModule,
        MatTabsModule,
        TableComponent,
        DialogsComponent,
        EnumComponent,
        FileListComponent,
    ],
})
export class AppComponent {
  constructor(private readonly translate: TranslateService) {
  }

  setLanguage(lang: string): void {
    this.translate.use(lang);
  }
}
