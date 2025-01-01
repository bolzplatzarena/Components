import {NgTemplateOutlet} from '@angular/common';
import {Component, input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'bpa-button',
  imports: [
    MatButtonModule,
    MatProgressSpinnerModule,
    NgTemplateOutlet,
  ],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  readonly type = input.required<'raised' | 'stroked'>();
  readonly function = input.required<() => Promise<void> | void>();

  readonly disabled = input<boolean>(false);
  readonly color = input<'primary' | 'accent' | 'warn'>('primary');

  protected loading = false;

  protected async click(): Promise<void> {
    this.loading = true;
    await this.function()();
    this.loading = false;
  }
}
