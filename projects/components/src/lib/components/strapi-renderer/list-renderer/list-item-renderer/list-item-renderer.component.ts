import { Component, input } from '@angular/core';
import { ListItemInlineNode } from '../../../../models/strapi-content.model';

@Component({
  selector: 'bpa-list-item-renderer',
  templateUrl: './list-item-renderer.component.html',
})
export class ListItemRendererComponent {
  readonly content = input.required<ListItemInlineNode>();
}
