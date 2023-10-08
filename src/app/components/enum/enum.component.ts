import { ChangeDetectionStrategy, Component } from '@angular/core';
import { translatableFrom, ComponentsModule } from '@bolzplatzarena/components';
import { HeroType } from '../../models/hero-type';
import { MatOptionModule } from '@angular/material/core';
import { NgFor } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-enum',
    templateUrl: './enum.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        TranslateModule,
        MatFormFieldModule,
        MatSelectModule,
        NgFor,
        MatOptionModule,
        ComponentsModule,
    ],
})
export class EnumComponent {
  readonly items = translatableFrom(HeroType, 'hero.types');
  readonly HeroType = HeroType;
}
