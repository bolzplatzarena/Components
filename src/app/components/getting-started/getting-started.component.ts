import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslatePipe],
})
export class GettingStartedComponent {
  protected readonly install = `npm install @bolzplatzarena/components @angular/material @fortawesome/angular-fontawesome @fortawesome/free-solid-svg-icons @ngx-translate/core`;

  protected readonly providers = `import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ComponentsModule } from '@bolzplatzarena/components';
import { provideTranslateService } from '@ngx-translate/core';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(ComponentsModule),
    provideTranslateService(),
  ],
});`;

  protected readonly entryPoints = `import { TableComponent, DialogService } from '@bolzplatzarena/components';
import { ButtonComponent } from '@bolzplatzarena/components/button';
import { StrapiRendererComponent } from '@bolzplatzarena/components/strapi';`;

  protected readonly translations = `{
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
}
