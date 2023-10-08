import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DialogComponent } from '../dialog.component';
import { TranslateModule } from '@ngx-translate/core';
import { DialogLayoutComponent } from '../dialog-layout/dialog-layout.component';

@Component({
    templateUrl: './simple-dialog.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [DialogLayoutComponent, TranslateModule],
})
export class SimpleDialogComponent extends DialogComponent<boolean> {
  override close(): void {
    super.close(false);
  }

  submit(): void {
    this.dialogRef.close(true);
  }
}
