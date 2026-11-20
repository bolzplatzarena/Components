import { NgTemplateOutlet } from '@angular/common';
import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { HeadingBlockNode } from '../../../models/strapi-content.model';

@Component({
  selector: 'bpa-heading-renderer',
  imports: [NgTemplateOutlet],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './heading-renderer.component.html',
})
export class HeadingRendererComponent {
  readonly content = input.required<HeadingBlockNode>();
}
