import { enableProdMode, importProvidersFrom } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { providePaginatorTexts } from '@bolzplatzarena/components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { provideTranslateService } from '@ngx-translate/core';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      FontAwesomeModule,
      MatButtonToggleModule,
      MatIconModule,
      ReactiveFormsModule,
      MatTabsModule,
      MatInputModule,
      MatSelectModule,
      MatListModule,
      MatIconModule,
      MatButtonModule,
    ),
    provideAnimations(),
    provideTranslateService(),
    providePaginatorTexts(),
  ],
})
  // eslint-disable-next-line no-console
  .catch(err => console.error(err));
