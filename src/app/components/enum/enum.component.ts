import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { EnumKeyPipe, getTranslatableFrom } from '@bolzplatzarena/components';
import { TranslateModule } from '@ngx-translate/core';
import { HeroType } from '../../models/hero-type';

@Component({
  selector: 'app-enum',
  templateUrl: './enum.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EnumKeyPipe, MatFormFieldModule, MatOptionModule, MatSelectModule, TranslateModule],
})
export class EnumComponent {
  protected readonly items = getTranslatableFrom(HeroType, 'hero.types');
  protected readonly HeroType = HeroType;
}
