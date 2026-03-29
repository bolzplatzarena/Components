import { Directive } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DialogComponent, DialogData } from './dialog.component';

export interface FormDialogData<D = unknown> extends DialogData {
  item?: D;
}

@Directive()
export abstract class FormDialogComponent<R, D = unknown> extends DialogComponent<R, FormDialogData<D>> {
  abstract readonly form: FormGroup;

  override close(): void {
    this.dialogRef.close(undefined);
  }

  submit(): void {
    this.dialogRef.close(this.form.getRawValue());
  }
}
