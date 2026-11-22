import { NgOptimizedImage } from '@angular/common';
import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { ImageBlockNode } from '../../../models/strapi-content.model';

@Component({
  selector: 'bpa-image-renderer',
  imports: [NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './image-renderer.component.html',
})
export class ImageRendererComponent {
  readonly content = input.required<ImageBlockNode>();
  /** Loads the image eagerly with high fetch priority, e.g. for the LCP image. */
  readonly priority = input(false);
}
