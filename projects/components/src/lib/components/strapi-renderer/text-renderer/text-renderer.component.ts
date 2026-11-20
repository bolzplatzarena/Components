import { Component, computed, input, ChangeDetectionStrategy } from '@angular/core';
import { TextInlineNode } from '../../../models/strapi-content.model';
import { isDefined } from '../../../utils/utils';

@Component({
  selector: 'bpa-text-renderer',
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './text-renderer.component.html',
})
export class TextRendererComponent {
  readonly content = input.required<TextInlineNode>();

  protected readonly textStyle = computed<string>(() => {
    const content = this.content();
    const decoration = [content.underline ? 'underline' : undefined, content.strikethrough ? 'line-through' : undefined]
      .filter(isDefined)
      .join(' ');
    return [
      content.bold ? 'font-weight: bold' : undefined,
      content.italic ? 'font-style: italic' : undefined,
      decoration ? `text-decoration: ${decoration}` : undefined,
    ]
      .filter(isDefined)
      .join('; ');
  });
}
