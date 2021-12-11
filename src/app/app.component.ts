import { Component } from '@angular/core';
import { ColumnConfig, ColumnType } from '@bolzplatzarena/components';

enum HeroType {
  Fighter,
  Hammer,
}

interface Hero {
  name: string;
  level: number;
  type: HeroType;
  health: number;
  birthday: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  readonly data: Hero[] = [{
    name: 'Thor',
    level: 100,
    type: HeroType.Hammer,
    health: 1000,
    birthday: new Date(1970, 1, 1),
  }, {
    name: 'Captain',
    level: 100,
    type: HeroType.Fighter,
    health: 1000,
    birthday: new Date(1930, 1, 1),
  }];
  readonly config: { [key: string]: ColumnConfig } = {
    'birthday': { type: ColumnType.Date },
    'type': { type: ColumnType.Enum, args: HeroType },
  };

  die(): void {
    alert('Die');
  }

  view() {
    alert('View');
  }
}
