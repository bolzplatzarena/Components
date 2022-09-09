import { ComponentType } from '@angular/cdk/overlay';
import { Injectable, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { firstValueFrom, Observable, switchMap } from 'rxjs';
import { SimpleDialogComponent } from '../components/simple-dialog/simple-dialog.component';

@Injectable({ providedIn: 'root' })
export class DialogService {
  constructor(private readonly dialog: MatDialog) {
  }

  open<T, R, C = unknown>(component: ComponentType<T> | TemplateRef<T>, data?: C): Observable<R> {
    return this.dialog.open(component, {
      disableClose: true,
      data,
    }).afterClosed();
  }

  confirm(translateKey: string): Promise<boolean>
  confirm(translateKey: string, action: () => (Promise<void> | void)): Promise<void>
  confirm(translateKey: string, action?: () => (Promise<void> | void)): Promise<void | boolean> {
    return firstValueFrom(
      this.open<SimpleDialogComponent, boolean>(
        SimpleDialogComponent,
        { translateKey },
      ).pipe(
        switchMap(async value => {
          if (value && action) {
            await action();
          }
          return Promise.resolve(value);
        }),
      ),
    );
  }
}
