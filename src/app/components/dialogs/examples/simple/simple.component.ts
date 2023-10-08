import { Component } from '@angular/core';
import { DialogComponent } from '@bolzplatzarena/components';

@Component({
    selector: 'app-simple',
    templateUrl: './simple.component.html',
    standalone: true,
})
export class SimpleComponent extends DialogComponent<boolean> {
  submit(): void | Promise<void> {
    return undefined;
  }
}
