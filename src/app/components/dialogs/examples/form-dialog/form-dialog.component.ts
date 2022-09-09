import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormDialogComponent } from '@bolzplatzarena/components';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleFormDialogComponent extends FormDialogComponent<{ email: string, name: string }> {
  form = this.fb.nonNullable.group({
    email: ['', [Validators.required]],
    name: ['', [Validators.required]],
  });

  constructor(
    private readonly fb: FormBuilder,
    dialogRef: MatDialogRef<{ result: string }>,
    @Inject(MAT_DIALOG_DATA) data: { info: any, translateKey: string },
  ) {
    super(dialogRef, data);

    alert(data.info + ' given to the dialog');
  }
}
