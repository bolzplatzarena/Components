import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { CodeBlockComponent } from '../code-block/code-block.component';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrl: './getting-started.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslatePipe, CodeBlockComponent],
})
export class GettingStartedComponent {
  private readonly install = `npm install @bolzplatzarena/components @angular/material @fortawesome/angular-fontawesome @fortawesome/free-solid-svg-icons @ngx-translate/core`;

  private readonly providers = `import { bootstrapApplication } from '@angular/platform-browser';
import { providePaginatorTexts } from '@bolzplatzarena/components';
import { provideTranslateService } from '@ngx-translate/core';

bootstrapApplication(AppComponent, {
  providers: [
    provideTranslateService(),
    providePaginatorTexts(), // optional: translated paginator labels
  ],
});`;

  private readonly entryPoints = `import { TableComponent, DialogService } from '@bolzplatzarena/components';
import { ButtonComponent } from '@bolzplatzarena/components/button';
import { StrapiRendererComponent } from '@bolzplatzarena/components/strapi';`;

  private readonly translations =`{
  "bpa": {
    "global": { "no": "Cancel", "okay": "Okay" },
    "components": {
      "table": {
        "items-per-page": "Items per page",
        "page": "Page {{ page }} of {{ amountPages }}",
        "first-page": "First page",
        "previous-page": "Previous page",
        "next-page": "Next page",
        "last-page": "Last page"
      }
    }
  }
}`;

  protected readonly steps = [
    { key: 'install', language: 'bash', code: this.install },
    { key: 'providers', language: 'typescript', code: this.providers },
    { key: 'entry_points', language: 'typescript', code: this.entryPoints },
    { key: 'translations', language: 'json', code: this.translations },
  ];
}
