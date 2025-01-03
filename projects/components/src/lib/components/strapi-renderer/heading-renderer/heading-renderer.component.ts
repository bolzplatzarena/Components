import {Component, input} from '@angular/core';
import {HeadingBlockNode} from "../../../models/strapi-content.model";
import {NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'bpa-heading-renderer',
  imports: [
    NgTemplateOutlet
  ],
  templateUrl: './heading-renderer.component.html',
  styleUrl: './heading-renderer.component.css'
})
export class HeadingRendererComponent {
  readonly content = input.required<HeadingBlockNode>();
}
