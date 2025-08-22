import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';
import { ImageBlockNode } from '../../../models/strapi-content.model';

@Component({
  selector: 'bpa-image-renderer',
  imports: [NgOptimizedImage],
  templateUrl: './image-renderer.component.html',
})
export class ImageRendererComponent {
  readonly content = input.required<ImageBlockNode>();
}
