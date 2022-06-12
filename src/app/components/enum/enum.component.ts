import { Component } from '@angular/core';
import { translatableFrom } from "@bolzplatzarena/components";
import { HeroType } from '../../models/hero-type';

@Component({
  selector: 'app-enum',
  templateUrl: './enum.component.html',
})
export class EnumComponent {
  readonly items = translatableFrom(HeroType, 'hero.types');
  readonly HeroType = HeroType;
}
