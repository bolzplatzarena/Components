import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DialogsComponent } from './components/dialogs/dialogs.component';
import { EnumComponent } from './components/enum/enum.component';
import { FileListComponent } from './components/file-list/file-list.component';
import { TableComponent } from './components/table/table.component';

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
