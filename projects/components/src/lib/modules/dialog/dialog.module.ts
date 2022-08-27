import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { SimpleDialogComponent } from './components/simple-dialog/simple-dialog.component';

@NgModule({
  declarations: [
    SimpleDialogComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [
    MatDialogModule,
  ],
})
export class DialogModule {
}
