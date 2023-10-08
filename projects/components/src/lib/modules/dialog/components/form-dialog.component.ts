import { Directive, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from './dialog.component';

interface DialogData {
  translateKey: string;
}

@Directive()
export abstract class FormDialogComponent<R> extends DialogComponent<R> {
  abstract readonly form: FormGroup;

  protected constructor(
    dialogRef: MatDialogRef<unknown, R>,
    @Inject(MAT_DIALOG_DATA) data: DialogData,
  ) {
    super(dialogRef, data);
  }

  override close(): void {
    this.dialogRef.close(undefined);
  }

  submit(): void {
    this.dialogRef.close(this.form.getRawValue());
  }
}
