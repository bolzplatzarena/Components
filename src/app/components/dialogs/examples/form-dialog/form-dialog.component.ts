import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormDialogComponent, DialogModule } from '@bolzplatzarena/components';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
    selector: 'app-form-dialog',
    templateUrl: './form-dialog.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        DialogModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
    ],
})
export class SimpleFormDialogComponent extends FormDialogComponent<{ email: string, name: string }> {
  form = this.fb.nonNullable.group({
    email: ['', [Validators.required]],
    name: ['', [Validators.required]],
  });

  constructor(
    private readonly fb: FormBuilder,
    dialogRef: MatDialogRef<{ result: string }>,
    @Inject(MAT_DIALOG_DATA) data: { info: unknown, translateKey: string },
  ) {
    super(dialogRef, data);

    alert(data.info + ' given to the dialog');
  }
}
