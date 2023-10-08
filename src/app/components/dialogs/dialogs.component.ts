import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DialogService } from '@bolzplatzarena/components';
import { CommonDialogComponent } from './examples/common-dialog/common-dialog.component';
import { SimpleFormDialogComponent } from './examples/form-dialog/form-dialog.component';
import { SimpleComponent } from './examples/simple/simple.component';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-dialogs',
    templateUrl: './dialogs.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [TranslateModule, MatButtonModule],
})
export class DialogsComponent {
  constructor(private readonly dialog: DialogService) {
  }

  openDialog(): void {
    this.dialog.open(SimpleComponent);
  }

  openConfirmation(): Promise<void> {
    return this.dialog.confirm('dialog.confirm_delete').then(value => {
      alert(value);
    });
  }

  openCommon(): void {
    this.dialog.open(CommonDialogComponent).subscribe(value => {
      alert(value);
    });
  }

  openForm(): void {
    this.dialog.open<SimpleFormDialogComponent, { email: string, name: string }, {
      info: string
    }>(SimpleFormDialogComponent, { info: 'Hello' }).subscribe(value => {
      alert(JSON.stringify(value) + ' returned from the dialog');
    });
  }
}
