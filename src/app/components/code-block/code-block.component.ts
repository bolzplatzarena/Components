import { Clipboard } from '@angular/cdk/clipboard';
import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faCopy } from '@fortawesome/free-solid-svg-icons/faCopy';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-code-block',
  templateUrl: './code-block.component.html',
  styleUrl: './code-block.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconButton, MatTooltip, FaIconComponent, TranslatePipe],
})
export class CodeBlockComponent {
  readonly code = input.required<string>();
  readonly language = input<string>('');

  protected readonly copied = signal(false);
  protected readonly faCopy = faCopy;
  protected readonly faCheck = faCheck;

  private readonly clipboard = inject(Clipboard);
  private timeout?: ReturnType<typeof setTimeout>;

  protected copy(): void {
    if (!this.clipboard.copy(this.code())) {
      return;
    }
    this.copied.set(true);
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => this.copied.set(false), 2000);
  }
}
