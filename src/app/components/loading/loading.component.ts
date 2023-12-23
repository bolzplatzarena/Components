import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ButtonComponent } from '@bolzplatzarena/components/button';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [
    ButtonComponent,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './loading.component.html',
})
export class LoadingComponent {
  protected readonly text = 'Speichern';
  protected readonly longText = 'Speichern & Save & Other words';
  protected readonly datasource = signal<boolean>(false);

  click() {
    this.datasource.set(true);
    setTimeout(() => this.datasource.set(false), 2000);
  }
}
