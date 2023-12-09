import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { DialogService } from '@bolzplatzarena/components';
import { TranslateModule } from '@ngx-translate/core';
import { CommonDialogComponent } from './examples/common-dialog/common-dialog.component';
import { SimpleFormDialogComponent } from './examples/form-dialog/form-dialog.component';
import { SimpleComponent } from './examples/simple/simple.component';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatButtonModule, TranslateModule],
})
export class DialogsComponent {
  constructor(private readonly dialog: DialogService) {
  }

  protected openDialog(): void {
    this.dialog.open(SimpleComponent);
  }

  protected async openConfirmation(): Promise<void> {
    const value = await this.dialog.confirm('dialog.confirm_delete');
    alert(value);
  }

  protected openCommon(): void {
    this.dialog.open(CommonDialogComponent).subscribe(value => {
      alert(value);
    });
  }

  protected openForm(): void {
    this.dialog.open<
      SimpleFormDialogComponent,
      { email: string, name: string },
      { item: { email: string, name: string } }>(
      SimpleFormDialogComponent,
      { item: { email: 'Meine Email', name: 'Mein Name' } },
    ).subscribe(value => {
      alert(JSON.stringify(value) + ' returned from the dialog');
    });
  }
}
