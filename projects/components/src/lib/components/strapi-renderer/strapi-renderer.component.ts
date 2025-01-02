import {Component, input} from '@angular/core';
import {RootNode} from "../../models/strapi-content.model";
import {InnerStrapiRendererComponent} from "./inner-strapi-renderer/inner-strapi-renderer.component";

@Component({
  selector: 'bpa-strapi-renderer',
  imports: [
    InnerStrapiRendererComponent
  ],
  templateUrl: './strapi-renderer.component.html',
  styleUrl: './strapi-renderer.component.css'
})
export class StrapiRendererComponent {
  readonly content = input.required<RootNode[]>()
}
