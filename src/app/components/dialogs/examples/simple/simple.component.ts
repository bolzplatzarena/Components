import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DialogComponent } from '@bolzplatzarena/components';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SimpleComponent extends DialogComponent<boolean> {
  submit(): void | Promise<void> {
    return undefined;
  }
}
