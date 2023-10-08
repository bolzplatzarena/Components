import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ComponentsModule, translatableFrom } from '@bolzplatzarena/components';
import { TranslateModule } from '@ngx-translate/core';
import { HeroType } from '../../models/hero-type';

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
