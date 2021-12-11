# Components

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.0. It includes
components for angular.

## Get started

This library uses the following tools / libraries:

- @fortawesome/angular-fontawesome
- @fortawesome/free-solid-svg-icons
- @ngx-translate/core

The components are fully translatable but the configuration needs to be done by your own in you application or libray:

```
import * as en from './i18n/en.json';

export class AppModule {
  constructor(translate: TranslateService) {
    translate.setTranslation('en', en, true);
    translate.use('en');
  }
}
```

The example could be find in the repository.

## Usage

In the template of your components you can add the following

```
<bpa-table [columnConfig]="config"
           [columns]="['name', 'level', 'type', 'health', 'birthday']"
           [dataset]="data"
           (deleteEvent)="die($event)"
           (editEvent)="view($event)"
           translateKey="hero.components.hero-list."></bpa-table>
```

The only inputs needed are `columns` and `dataset`.

### Actions

If you listen to the `delete` event, the corresponding action icon is automatically added to th columns.

If you listen to the `edit` event, the corresponding action icon is automatically added to th columns.

### Column Configuration

The column configuration can be used for custom columns:

```
  readonly config: { [key: string]: ColumnConfig } = {
    'birthday': { type: ColumnType.Date },
    'type': { type: ColumnType.Enum, args: MyEnum },
  };
```

#### Date

The input needs to be a date and will be formatted probably

#### Enum

This configuration can be used if a property of the data is an enum type. The tables generates are translate key
automatically, so you can use the translate config file to give the enum value a term.
