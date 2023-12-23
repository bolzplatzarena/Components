import { NgTemplateOutlet } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'bpa-button',
  standalone: true,
  imports: [
    MatButtonModule,
    MatProgressSpinnerModule,
    NgTemplateOutlet,
  ],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input({ required: true }) type!: 'raised' | 'stroked';
  @Input({ required: false }) color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input({ required: true }) text!: string;
  @Input({ required: true }) loading = false;
}
