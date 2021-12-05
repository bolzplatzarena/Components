import { Component } from '@angular/core';
import { ColumnConfig, ColumnType } from '@bolzplatzarena/components';

interface Hero {
  name: string;
  level: number;
  type: string;
  health: number;
  birthday: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly data: Hero[] = [{
    name: 'Thor',
    level: 100,
    type: 'Hammer',
    health: 1000,
    birthday: new Date(1970, 1, 1),
  }];
  readonly config: { [key: string]: ColumnConfig } = {
    'birthday': { type: ColumnType.Date },
  };

  die(hero: Hero): void {
    alert('Die');
  }

  view(hero: Hero) {
    alert('View');
  }
}
