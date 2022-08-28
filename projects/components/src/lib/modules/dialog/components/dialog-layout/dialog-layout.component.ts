import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { DialogComponent } from '../dialog.component';

@Component({
  selector: 'bpa-dialog-layout',
  templateUrl: './dialog-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogLayoutComponent<T> extends DialogComponent<T> implements OnInit {
  @Input() dialog?: DialogComponent<T>;
  @Input() translateKey!: string;

  override registerEnterKey = false;
  override registerEscKey = false;

  ngOnInit(): void {
    if (!this.dialog) {
      throw new Error('DialogLayoutComponent requires a dialog input');
    }
  }

  override close(): void {
    return this.dialog?.close();
  }

  submit(): void | Promise<void> {
    return this.dialog?.submit();
  }
}