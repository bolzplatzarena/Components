import {Component, input} from '@angular/core';
import {ImageBlockNode} from "../../../models/strapi-content.model";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'bpa-image-renderer',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './image-renderer.component.html',
  styleUrl: './image-renderer.component.css'
})
export class ImageRendererComponent {
  readonly content = input.required<ImageBlockNode>();
}
