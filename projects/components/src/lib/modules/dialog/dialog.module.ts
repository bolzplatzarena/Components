import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { SimpleDialogComponent } from './components/simple-dialog/simple-dialog.component';
import { DialogLayoutComponent } from './components/dialog-layout/dialog-layout.component';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        MatDialogModule,
        MatButtonModule,
        SimpleDialogComponent,
        DialogLayoutComponent,
    ],
    exports: [
        MatDialogModule,
        DialogLayoutComponent,
    ],
})
export class DialogModule {
}
