import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { map, Observable, of, startWith } from 'rxjs';
import { DialogComponent } from '../dialog.component';
import { FormDialogComponent } from '../form-dialog.component';

@Component({
  selector: 'bpa-dialog-layout',
  templateUrl: './dialog-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogLayoutComponent<T> extends DialogComponent<T> implements OnInit {
  @Input() dialog?: DialogComponent<T>;
  @Input() translateKey!: string;

  valid$ !: Observable<boolean>;
  override registerEnterKey = false;
  override registerEscKey = false;

  ngOnInit(): void {
    if (!this.dialog) {
      throw new Error('DialogLayoutComponent requires a dialog input');
    }

    const form = (this.dialog as FormDialogComponent<unknown>).form;
    this.valid$ = form.statusChanges.pipe(
      startWith(form.valid),
      map(() => form.valid),
    );
  }

  override close(): void {
    return this.dialog?.close();
  }

  submit(): void | Promise<void> {
    return this.dialog?.submit();
  }
}
