import {Component, input} from '@angular/core';
import {
  CodeBlockNode,
  DefaultInlineNode,
  HeadingBlockNode,
  ImageBlockNode,
  LinkInlineNode,
  ListBlockNode,
  ListItemInlineNode,
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
import {ListRendererComponent} from "../list-renderer/list-renderer.component";
import {ListItemRendererComponent} from "../list-renderer/list-item-renderer/list-item-renderer.component";
import {ImageRendererComponent} from "../image-renderer/image-renderer.component";
import {JsonPipe} from "@angular/common";

type SupportedNodes = RootNode | DefaultInlineNode | ListItemInlineNode;

@Component({
  selector: 'bpa-inner-strapi-renderer',
  imports: [TextRendererComponent, LinkRendererComponent, HeadingRendererComponent, CodeRendererComponent, QuoteRendererComponent, ListRendererComponent, ListItemRendererComponent, ImageRendererComponent, JsonPipe],
  templateUrl: './inner-strapi-renderer.component.html',
  styleUrl: './inner-strapi-renderer.component.css',
})
export class InnerStrapiRendererComponent {
  readonly content = input.required<SupportedNodes[]>();
  readonly debug = input.required<boolean>();

  protected readonly isParagraph = (node: SupportedNodes): node is ParagraphBlockNode => node.type === 'paragraph';
  protected readonly isText = (node: SupportedNodes): node is TextInlineNode => node.type === 'text';
  protected readonly isLink = (node: SupportedNodes): node is LinkInlineNode => node.type === 'link';
  protected readonly isHeading = (node: SupportedNodes): node is HeadingBlockNode => node.type === 'heading';
  protected readonly isCode = (node: SupportedNodes): node is CodeBlockNode => node.type === 'code';
  protected readonly isQuote = (node: SupportedNodes): node is QuoteBlockNode => node.type === 'quote';
  protected readonly isList = (node: SupportedNodes): node is ListBlockNode => node.type === 'list';
  protected readonly isListItem = (node: SupportedNodes): node is ListItemInlineNode => node.type === 'list-item';
  protected readonly isImage = (node: SupportedNodes): node is ImageBlockNode => node.type === 'image';
}
