import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { RootNode } from '../../models/strapi-content.model';
import { InnerStrapiRendererComponent } from './inner-strapi-renderer/inner-strapi-renderer.component';

@Component({
  selector: 'bpa-strapi-renderer',
  imports: [InnerStrapiRendererComponent],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './strapi-renderer.component.html',
})
export class StrapiRendererComponent {
  readonly content = input.required<RootNode[]>();
  readonly debug = input<boolean>(false);
  /** Loads the first top-level image eagerly with high fetch priority (LCP image); all others stay lazy. */
  readonly prioritizeFirstImage = input(false);
}
