import { Directive, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

interface DialogData {
  translateKey: string;
}

@Directive()
export abstract class DialogComponent<T> {
  protected registerEnterKey = false;
  protected registerEscKey = true;

  constructor(
    protected readonly dialogRef: MatDialogRef<T>,
    @Inject(MAT_DIALOG_DATA) readonly data: DialogData,
  ) {
    const subscription = this.dialogRef.keydownEvents().subscribe(event => {
      if (this.registerEscKey && (event.key === 'Escape')) {
        this.close();
      }
      if (this.registerEnterKey && (event.key === 'Enter')) {
        this.submit();
      }
    });
    this.dialogRef.afterClosed().subscribe(() => {
      subscription.unsubscribe();
    });
  }

  close(value?: unknown): void {
    this.dialogRef.close(value);
  }

  abstract submit(): void | Promise<void>;
}
