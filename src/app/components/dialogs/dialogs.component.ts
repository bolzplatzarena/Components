import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DialogService } from '@bolzplatzarena/components';
import { CommonDialogComponent } from './examples/common-dialog/common-dialog.component';
import { SimpleComponent } from './examples/simple/simple.component';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogsComponent implements OnInit {

  constructor(private readonly dialog: DialogService) {
  }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(SimpleComponent, {
      disableClose: true,
      data: { translateKey: 'dialog.confirm_delete' },
    });
  }

  openConfirmation(): Promise<void> {
    return this.dialog.confirm('dialog.confirm_delete').then(value => {
      alert(value);
    });
  }

  openCommon(): void {
    this.dialog.open(CommonDialogComponent).subscribe(value => {
      alert(value);
    });
  }
}
