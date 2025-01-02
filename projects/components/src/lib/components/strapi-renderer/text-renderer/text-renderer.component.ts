import {Component, input} from '@angular/core';
import {TextInlineNode} from "../../../models/strapi-content.model";

@Component({
  selector: 'bpa-text-renderer',
  imports: [],
  templateUrl: './text-renderer.component.html',
  styleUrl: './text-renderer.component.css'
})
export class TextRendererComponent {
  readonly content = input.required<TextInlineNode>();
}
