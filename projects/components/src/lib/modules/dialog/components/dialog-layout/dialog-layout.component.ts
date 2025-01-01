import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, OnInit, input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {TranslateModule} from '@ngx-translate/core';
import {map, Observable, of, startWith} from 'rxjs';
import {DialogComponent} from '../dialog.component';
import {FormDialogComponent} from '../form-dialog.component';

@Component({
  selector: 'bpa-dialog-layout',
  templateUrl: './dialog-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AsyncPipe,
    MatButtonModule,
    MatDialogModule,
    TranslateModule,
  ]
})
export class DialogLayoutComponent<T> extends DialogComponent<T> implements OnInit {
  readonly dialog = input<DialogComponent<T>>();
  readonly translateKey = input.required<string>();

  protected valid$ !: Observable<boolean>;
  protected override registerEnterKey = false;
  protected override registerEscKey = false;

  ngOnInit(): void {
    const dialog = this.dialog();
    if (!dialog) {
      throw new Error('DialogLayoutComponent requires a dialog input');
    }

    if (isFormDialogComponent(dialog)) {
      const form = (dialog as FormDialogComponent<unknown>).form;
      this.valid$ = form.statusChanges.pipe(
        startWith(form.valid),
        map(() => form.valid),
      );
    } else {
      this.valid$ = of(true);
    }
  }

  override close(): void {
    return this.dialog()?.close();
  }

  submit(): void | Promise<void> {
    return this.dialog()?.submit();
  }
}

function isFormDialogComponent(component: unknown): component is FormDialogComponent<unknown> {
  return (component as any).form !== undefined;
}
