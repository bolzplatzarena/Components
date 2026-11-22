import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslatePipe } from '@ngx-translate/core';
import { map, Observable, of, startWith } from 'rxjs';
import { DialogComponent } from '../dialog.component';
import { FormDialogComponent } from '../form-dialog.component';

@Component({
  selector: 'bpa-dialog-layout',
  templateUrl: './dialog-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, MatButtonModule, MatDialogModule, TranslatePipe],
})
export class DialogLayoutComponent<T> implements OnInit {
  readonly dialog = input.required<DialogComponent<T>>();
  readonly translateKey = input.required<string>();

  protected valid$!: Observable<boolean>;

  ngOnInit(): void {
    const dialog = this.dialog();
    if (isFormDialogComponent(dialog)) {
      const form = dialog.form;
      this.valid$ = form.statusChanges.pipe(
        startWith(form.valid),
        map(() => form.valid),
      );
    } else {
      this.valid$ = of(true);
    }
  }

  close(): void {
    this.dialog().close();
  }

  submit(): void | Promise<void> {
    return this.dialog().submit();
  }
}

function isFormDialogComponent(component: DialogComponent<unknown>): component is FormDialogComponent<unknown> {
  return 'form' in component;
}
