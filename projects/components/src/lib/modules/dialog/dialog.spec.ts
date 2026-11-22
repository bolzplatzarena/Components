import { Component, inject } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { provideTranslateService } from '@ngx-translate/core';
import { Observable, of, Subject } from 'rxjs';
import { DialogLayoutComponent } from './components/dialog-layout/dialog-layout.component';
import { FormDialogComponent } from './components/form-dialog.component';
import { DialogService } from './services/dialog.service';

@Component({
  template: '<bpa-dialog-layout [dialog]="this" translateKey="dialog"></bpa-dialog-layout>',
  imports: [DialogLayoutComponent],
})
class NameDialogComponent extends FormDialogComponent<{ name: string }> {
  readonly form = inject(FormBuilder).nonNullable.group({ name: ['', Validators.required] });
}

describe('FormDialogComponent', () => {
  const close = jest.fn();
  const keydown = new Subject<KeyboardEvent>();

  beforeEach(() => {
    close.mockClear();
    TestBed.configureTestingModule({
      providers: [
        { provide: MatDialogRef, useValue: { close, keydownEvents: (): Subject<KeyboardEvent> => keydown, afterClosed: (): Subject<void> => new Subject() } },
        { provide: MAT_DIALOG_DATA, useValue: { translateKey: 'dialog' } },
        provideTranslateService(),
      ],
    });
  });

  it('does not close with an invalid form, not even via Enter', () => {
    const dialog = TestBed.createComponent(NameDialogComponent).componentInstance;
    (dialog as unknown as { registerEnterKey: boolean }).registerEnterKey = true;

    keydown.next(new KeyboardEvent('keydown', { key: 'Enter' }));

    expect(close).not.toHaveBeenCalled();
    expect(dialog.form.touched).toBe(true);
  });

  it('enables the OK button of the layout only for a valid form', async () => {
    const fixture = TestBed.createComponent(NameDialogComponent);
    const getOkButton = (): HTMLButtonElement => fixture.nativeElement.querySelectorAll('button')[1];
    fixture.detectChanges();
    expect(getOkButton().disabled).toBe(true);

    fixture.componentInstance.form.setValue({ name: 'Thor' });
    fixture.detectChanges();
    await fixture.whenStable();
    expect(getOkButton().disabled).toBe(false);
  });

  it('closes with the form value when valid', () => {
    const dialog = TestBed.createComponent(NameDialogComponent).componentInstance;
    dialog.form.setValue({ name: 'Thor' });

    dialog.submit();

    expect(close).toHaveBeenCalledWith({ name: 'Thor' });
  });
});

describe('DialogService.confirm', () => {
  const setup = (confirmed: boolean): DialogService => {
    TestBed.configureTestingModule({ providers: [{ provide: MatDialog, useValue: { open: (): { afterClosed: () => Observable<boolean> } => ({ afterClosed: (): Observable<boolean> => of(confirmed) }) } }] });
    return TestBed.inject(DialogService);
  };

  it('runs the action only when confirmed', async () => {
    const action = jest.fn();

    await setup(true).confirm('dialog.delete', action);

    expect(action).toHaveBeenCalledTimes(1);
  });

  it('skips the action and resolves false when cancelled', async () => {
    const action = jest.fn();
    const service = setup(false);

    await service.confirm('dialog.delete', action);

    expect(action).not.toHaveBeenCalled();
    await expect(service.confirm('dialog.delete')).resolves.toBe(false);
  });
});
