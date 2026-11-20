import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { LinkInlineNode } from '../../../models/strapi-content.model';

@Component({
  selector: 'bpa-link-renderer',
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './link-renderer.component.html',
})
export class LinkRendererComponent {
  readonly content = input.required<LinkInlineNode>();
}
