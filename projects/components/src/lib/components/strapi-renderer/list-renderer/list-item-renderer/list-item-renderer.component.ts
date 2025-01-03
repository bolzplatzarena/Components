import {Component, input} from '@angular/core';
import {ListItemInlineNode} from "../../../../models/strapi-content.model";

@Component({
  selector: 'bpa-list-item-renderer',
  imports: [],
  templateUrl: './list-item-renderer.component.html',
  styleUrl: './list-item-renderer.component.css'
})
export class ListItemRendererComponent {
  readonly content = input.required<ListItemInlineNode>();
}
