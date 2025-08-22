import { NgTemplateOutlet } from '@angular/common';
import { Component, input } from '@angular/core';
import { ListBlockNode } from '../../../models/strapi-content.model';

@Component({
  selector: 'bpa-list-renderer',
  imports: [NgTemplateOutlet],
  templateUrl: './list-renderer.component.html',
})
export class ListRendererComponent {
  readonly content = input.required<ListBlockNode>();
}
