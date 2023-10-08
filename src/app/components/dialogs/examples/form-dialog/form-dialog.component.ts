import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DialogModule, FormDialogComponent } from '@bolzplatzarena/components';

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
