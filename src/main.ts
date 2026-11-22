import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { providePaginatorTexts } from '@bolzplatzarena/components';
import { provideTranslateService } from '@ngx-translate/core';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [provideTranslateService(), providePaginatorTexts()],
})
  // eslint-disable-next-line no-console
  .catch(err => console.error(err));
