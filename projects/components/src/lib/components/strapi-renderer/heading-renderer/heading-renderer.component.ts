import { NgTemplateOutlet } from '@angular/common';
import { Component, input } from '@angular/core';
import { HeadingBlockNode } from '../../../models/strapi-content.model';

@Component({
  selector: 'bpa-heading-renderer',
  imports: [NgTemplateOutlet],
  templateUrl: './heading-renderer.component.html',
})
export class HeadingRendererComponent {
  readonly content = input.required<HeadingBlockNode>();
}
