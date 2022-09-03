import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '@bolzplatzarena/components';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormDialogComponent extends DialogComponent<{ result: string }> {
  readonly form = this.fb.nonNullable.group({
    email: '',
    name: '',
  });

  constructor(
    private readonly fb: FormBuilder,
    dialogRef: MatDialogRef<{ result: string }>,
    @Inject(MAT_DIALOG_DATA) data: { info: any, translateKey: string },
  ) {
    super(dialogRef, data);

    alert(data.info + ' given to the dialog');
  }

  submit(): void | Promise<void> {
    this.close({ result: JSON.stringify(this.form.getRawValue()) });
  }
}
