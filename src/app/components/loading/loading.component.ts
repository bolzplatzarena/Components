import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ButtonComponent } from '@bolzplatzarena/components/button';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-loading',
    imports: [
        ButtonComponent,
        MatButtonModule,
        MatProgressSpinnerModule,
        TranslateModule,
    ],
    templateUrl: './loading.component.html'
})
export class LoadingComponent {
  protected readonly text = 'Speichern';
  protected readonly longText = 'Speichern & Save & Other words';
  protected readonly datasource = signal<boolean>(false);

  async click(): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 4000));
  }
}
