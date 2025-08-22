import { Component, input } from '@angular/core';
import { LinkInlineNode } from '../../../models/strapi-content.model';

@Component({
  selector: 'bpa-link-renderer',
  templateUrl: './link-renderer.component.html',
})
export class LinkRendererComponent {
  readonly content = input.required<LinkInlineNode>();
}
