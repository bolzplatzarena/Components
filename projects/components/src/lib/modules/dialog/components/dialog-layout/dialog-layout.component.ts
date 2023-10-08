import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { map, Observable, startWith } from 'rxjs';
import { DialogComponent } from '../dialog.component';
import { FormDialogComponent } from '../form-dialog.component';

@Component({
  selector: 'bpa-dialog-layout',
  templateUrl: './dialog-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    MatButtonModule,
    MatDialogModule,
    NgIf,
    TranslateModule,
  ],
})
export class DialogLayoutComponent<T> extends DialogComponent<T> implements OnInit {
  @Input() dialog?: DialogComponent<T>;
  @Input() translateKey!: string;

  protected valid$ !: Observable<boolean>;
  protected override registerEnterKey = false;
  protected override registerEscKey = false;

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
