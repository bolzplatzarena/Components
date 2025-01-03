import {Component, input} from '@angular/core';
import {ListBlockNode} from "../../../models/strapi-content.model";
import {NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'bpa-list-renderer',
  imports: [
    NgTemplateOutlet
  ],
  templateUrl: './list-renderer.component.html',
  styleUrl: './list-renderer.component.css'
})
export class ListRendererComponent {
  readonly content = input.required<ListBlockNode>();
}
