import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DialogLayoutComponent, FormDialogComponent } from '@bolzplatzarena/components';

interface FormData {
  email: string;
  name: string;
}

interface ItemData extends FormData {
  id?: string;
}

@Component({
    selector: 'app-form-dialog',
    templateUrl: './form-dialog.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        DialogLayoutComponent,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
    ]
})
export class SimpleFormDialogComponent extends FormDialogComponent<FormData, ItemData> {
  form = this.fb.nonNullable.group({
    email: ['', [Validators.required]],
    name: ['', [Validators.required]],
  });

  constructor(
    private readonly fb: FormBuilder,
    dialogRef: MatDialogRef<{ result: string }>,
    @Inject(MAT_DIALOG_DATA) data: { item: { email: string, name: string }, translateKey: string },
  ) {
    super(dialogRef, data);
  }

  override submit(): void {
    alert('Form submitted for: ' + JSON.stringify(this.data.item));

    super.submit();
  }
}
