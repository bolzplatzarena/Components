# Components

This library includes components for angular.

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

### Sorting

Sorting is enabled by default but it can be disabled by setting `sortable` to false.

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

### Paging

You need to configure the terms of pagination or you implement your own implementation of `MatPaginatorIntl`.

```
  "bpa": {
    "components": {
      "table": {
        "items-per-page": "Einträge pro Seite",
        "page": "Seite {{ page }} von {{ amountPages }}",
        "next-page": "Nächste Seite",
        "last-page": "Letzte Seite",
        "first-page": "Erste Seite",
        "previous-page": "Vorherige Seite"
      }
    }
  },
```

## Migration from < 0.15 to > 0.15

As the signal outputs in angular do not have a possibility to check for observers, you need set it update manually using the `actions` input.
