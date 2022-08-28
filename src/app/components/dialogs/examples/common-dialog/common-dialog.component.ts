import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DialogComponent } from '@bolzplatzarena/components';

@Component({
  selector: 'app-common-dialog',
  templateUrl: './common-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonDialogComponent extends DialogComponent<boolean> {
  override close(): void {
    alert('Close button in layout clicked');

    super.close(false);
  }

  submit(): void | Promise<void> {
    alert('Okay button in layout clicked');

    super.close(true);
  }
}
