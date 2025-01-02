import { Directive, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent, DialogData } from './dialog.component';

export interface FormDialogData<D = unknown> extends DialogData {
  item?: D;
}

@Directive()
export abstract class FormDialogComponent<R, D = unknown> extends DialogComponent<R, FormDialogData<D>> {
  abstract readonly form: FormGroup;

  protected constructor(dialogRef: MatDialogRef<unknown, R>, @Inject(MAT_DIALOG_DATA) data: FormDialogData<D>) {
    super(dialogRef, data);
  }

  override close(): void {
    this.dialogRef.close(undefined);
  }

  submit(): void {
    this.dialogRef.close(this.form.getRawValue());
  }
}
