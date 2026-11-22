import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { DialogService } from '@bolzplatzarena/components';
import { TranslatePipe } from '@ngx-translate/core';
import { CodeBlockComponent } from '../code-block/code-block.component';
import { CommonDialogComponent } from './examples/common-dialog/common-dialog.component';
import { SimpleFormDialogComponent } from './examples/form-dialog/form-dialog.component';
import { SimpleComponent } from './examples/simple/simple.component';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CodeBlockComponent, MatButtonModule, TranslatePipe],
})
export class DialogsComponent {
  private readonly dialog = inject(DialogService);

  protected readonly simpleExample = `export class SimpleComponent extends DialogComponent<boolean> {
  submit(): void {}
}

this.dialog.open(SimpleComponent);`;
  protected readonly confirmExample = `// resolves to true or false
const confirmed = await this.dialog.confirm('dialog.confirm_delete');

// runs the action only when confirmed
await this.dialog.confirm('dialog.confirm_delete', () => this.delete(item));`;
  protected readonly layoutExample = `<bpa-dialog-layout [dialog]="this" translateKey="dialog.layout">
  <p>Dialog content</p>
</bpa-dialog-layout>`;
  protected readonly formExample = `export class SimpleFormDialogComponent extends FormDialogComponent<FormData, ItemData> {
  readonly form = inject(FormBuilder).nonNullable.group({
    email: ['', [Validators.required]],
    name: ['', [Validators.required]],
  });
}

this.dialog
  .open(SimpleFormDialogComponent, { item: { email: 'mail@example.com', name: 'Name' } })
  .subscribe(value => console.log(value));`;

  protected openDialog(): void {
    this.dialog.open(SimpleComponent);
  }

  protected async openConfirmation(): Promise<void> {
    const value = await this.dialog.confirm('dialog.confirm_delete');
    alert(value);
  }

  protected async openConfirmationWithAction(): Promise<void> {
    await this.dialog.confirm('dialog.confirm_delete', () => alert('Item deleted'));
  }

  protected openCommon(): void {
    this.dialog.open(CommonDialogComponent).subscribe(value => {
      alert(value);
    });
  }

  protected openForm(): void {
    this.dialog
      .open<
        SimpleFormDialogComponent,
        { email: string; name: string },
        { item: { email: string; name: string } }
      >(SimpleFormDialogComponent, { item: { email: 'Meine Email', name: 'Mein Name' } })
      .subscribe(value => {
        alert(JSON.stringify(value) + ' returned from the dialog');
      });
  }
}
