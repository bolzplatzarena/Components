import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'bpa-button',
  imports: [MatButtonModule, MatProgressSpinnerModule, NgTemplateOutlet],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  readonly type = input.required<'raised' | 'stroked'>();
  readonly function = input.required<() => Promise<void> | void>();

  readonly disabled = input<boolean>(false);
  readonly color = input<'primary' | 'accent' | 'warn'>('primary');

  protected readonly loading = signal(false);

  protected async click(): Promise<void> {
    this.loading.set(true);
    try {
      await this.function()();
    } finally {
      this.loading.set(false);
    }
  }
}
