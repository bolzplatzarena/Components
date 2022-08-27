import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DialogComponent } from '../dialog.component';

@Component({
  templateUrl: './simple-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleDialogComponent extends DialogComponent<boolean> {
  override close() {
    super.close(false);
  }

  submit(): void {
    this.dialogRef.close(true);
  }
}
