import {Component, input} from '@angular/core';
import {
  DefaultInlineNode,
  LinkInlineNode,
  ParagraphBlockNode,
  RootNode,
  TextInlineNode
} from "../../../models/strapi-content.model";
import {TextRendererComponent} from "../text-renderer/text-renderer.component";
import {LinkRendererComponent} from "../link-renderer/link-renderer.component";

@Component({
  selector: 'bpa-inner-strapi-renderer',
  imports: [
    TextRendererComponent,
    LinkRendererComponent
  ],
  templateUrl: './inner-strapi-renderer.component.html',
  styleUrl: './inner-strapi-renderer.component.css'
})
export class InnerStrapiRendererComponent {
  readonly content = input.required<(RootNode | DefaultInlineNode)[]>();

  protected readonly isParagraph = (node: (RootNode | DefaultInlineNode)): node is ParagraphBlockNode => node.type === 'paragraph';
  protected readonly isText = (node: (RootNode | DefaultInlineNode)): node is TextInlineNode => node.type === 'text';
  protected readonly isLink = (node: (RootNode | DefaultInlineNode)): node is LinkInlineNode => node.type === 'link';

}