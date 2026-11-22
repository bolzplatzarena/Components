import { ApplicationRef, provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';

describe('ButtonComponent (zoneless)', () => {
  beforeEach(() => TestBed.configureTestingModule({ providers: [provideZonelessChangeDetection()] }));

  // let pending promises continue, then wait for the scheduled change detection
  const settle = async (): Promise<void> => {
    await new Promise(resolve => setTimeout(resolve));
    await TestBed.inject(ApplicationRef).whenStable();
  };

  const createButton = async (action: () => Promise<void>): Promise<ComponentFixture<ButtonComponent>> => {
    const fixture = TestBed.createComponent(ButtonComponent);
    fixture.componentRef.setInput('type', 'raised');
    fixture.componentRef.setInput('function', action);
    await fixture.whenStable();
    return fixture;
  };

  const getButton = (fixture: ComponentFixture<ButtonComponent>): HTMLButtonElement => fixture.nativeElement.querySelector('button');
  const getSpinner = (fixture: ComponentFixture<ButtonComponent>): Element | null => fixture.nativeElement.querySelector('mat-spinner');

  it('shows the spinner while the action runs and hides it afterwards', async () => {
    let finish!: () => void;
    const fixture = await createButton(() => new Promise<void>(resolve => (finish = resolve)));

    getButton(fixture).click();
    await settle();
    expect(getSpinner(fixture)).not.toBeNull();
    expect(getButton(fixture).disabled).toBe(true);

    finish();
    await settle();
    expect(getSpinner(fixture)).toBeNull();
    expect(getButton(fixture).disabled).toBe(false);
  });

  it('resets the loading state when the action throws', async () => {
    const fixture = await createButton(() => Promise.reject(new Error('failed')));

    // the error is rethrown on purpose so the app's ErrorHandler sees it
    await expect((fixture.componentInstance as unknown as { click: () => Promise<void> }).click()).rejects.toThrow('failed');
    await settle();
    expect(getSpinner(fixture)).toBeNull();
    expect(getButton(fixture).disabled).toBe(false);
  });
});
