import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ButtonComponent } from '@bolzplatzarena/components/button';
import { TranslatePipe } from '@ngx-translate/core';
import { CodeBlockComponent } from '../code-block/code-block.component';

@Component({
  selector: 'app-loading',
  imports: [ButtonComponent, CodeBlockComponent, MatButtonModule, MatProgressSpinnerModule, TranslatePipe],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './loading.component.html',
})
export class LoadingComponent {
  protected readonly text = 'Speichern';
  protected readonly longText = 'Speichern & Save & Other words';
  protected readonly example = `<bpa-button type="raised" color="accent" [function]="save">Save</bpa-button>`;
  protected readonly datasource = signal<boolean>(false);

  async click(): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 4000));
  }
}
