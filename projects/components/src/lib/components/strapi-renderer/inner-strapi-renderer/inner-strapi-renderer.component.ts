import {Component, input} from '@angular/core';
import {
  CodeBlockNode,
  DefaultInlineNode,
  HeadingBlockNode,
  LinkInlineNode,
  ParagraphBlockNode,
  QuoteBlockNode,
  RootNode,
  TextInlineNode
} from '../../../models/strapi-content.model';
import {TextRendererComponent} from '../text-renderer/text-renderer.component';
import {LinkRendererComponent} from '../link-renderer/link-renderer.component';
import {HeadingRendererComponent} from "../heading-renderer/heading-renderer.component";
import {CodeRendererComponent} from "../code-renderer/code-renderer.component";
import {QuoteRendererComponent} from "../quote-renderer/quote-renderer.component";

@Component({
  selector: 'bpa-inner-strapi-renderer',
  imports: [TextRendererComponent, LinkRendererComponent, HeadingRendererComponent, CodeRendererComponent, QuoteRendererComponent],
  templateUrl: './inner-strapi-renderer.component.html',
  styleUrl: './inner-strapi-renderer.component.css',
})
export class InnerStrapiRendererComponent {
  readonly content = input.required<(RootNode | DefaultInlineNode)[]>();
  readonly debug = input.required<boolean>();

  protected readonly isParagraph = (node: RootNode | DefaultInlineNode): node is ParagraphBlockNode => node.type === 'paragraph';
  protected readonly isText = (node: RootNode | DefaultInlineNode): node is TextInlineNode => node.type === 'text';
  protected readonly isLink = (node: RootNode | DefaultInlineNode): node is LinkInlineNode => node.type === 'link';
  protected readonly isHeading = (node: RootNode | DefaultInlineNode): node is HeadingBlockNode => node.type === 'heading';
  protected readonly isCode = (node: RootNode | DefaultInlineNode): node is CodeBlockNode => node.type === 'code';
  protected readonly isQuote = (node: RootNode | DefaultInlineNode): node is QuoteBlockNode => node.type === 'quote';
}
