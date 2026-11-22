import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { EnumKeyPipe, getTranslatableFrom } from '@bolzplatzarena/components';
import { TranslatePipe } from '@ngx-translate/core';
import { HeroType } from '../../models/hero-type';
import { CodeBlockComponent } from '../code-block/code-block.component';

@Component({
  selector: 'app-enum',
  templateUrl: './enum.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CodeBlockComponent, EnumKeyPipe, MatFormFieldModule, MatOptionModule, MatSelectModule, TranslatePipe],
})
export class EnumComponent {
  protected readonly optionsExample = `// labels are translated via 'hero.types.<key in lower case>'
protected readonly items = getTranslatableFrom(HeroType, 'hero.types');`;
  protected readonly pipeExample = `Original value: {{ HeroType.Scientist }}
As String: {{ HeroType.Scientist | enumKey: HeroType }}`;
  protected readonly items = getTranslatableFrom(HeroType, 'hero.types');
  protected readonly HeroType = HeroType;
}
