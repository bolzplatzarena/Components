import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SimpleDialogComponent } from './components/simple-dialog/simple-dialog.component';

@NgModule({
  declarations: [
    SimpleDialogComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class DialogModule {
}
