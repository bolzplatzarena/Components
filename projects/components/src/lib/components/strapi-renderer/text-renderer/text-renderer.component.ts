import { Component, computed, input } from '@angular/core';
import { TextInlineNode } from '../../../models/strapi-content.model';
import { isDefined } from '../../../utils/utils';

@Component({
  selector: 'bpa-text-renderer',
  templateUrl: './text-renderer.component.html',
})
export class TextRendererComponent {
  readonly content = input.required<TextInlineNode>();

  protected readonly textStyle = computed<string>(() => {
    return [
      this.content().bold ? 'font-weight: bold;' : undefined,
      this.content().italic ? 'font-style: italic;' : undefined,
      this.content().underline ? 'text-decoration: underline;' : undefined,
    ]
      .filter(isDefined)
      .join(';');
  });
}
