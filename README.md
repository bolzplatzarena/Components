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

Add `providePaginatorTexts()` to the providers of your application to translate the paginator labels via ngx-translate,
or provide your own implementation of `MatPaginatorIntl`. No module import is needed; the table registers its icons itself.

```
bootstrapApplication(AppComponent, {
  providers: [provideTranslateService(), providePaginatorTexts()],
});
```

The following translation keys are used:

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

## Strapi

The library includes a component to display content of the wysiwyg editor of strapi.

There is a single entry point for the strap called ```@bolzplatzarena/components/strapi```. Everything is standalone no module needs to be imported.

```

### Support

The library is in experimental state and is not recommended for production use because it does not support all types of the strapi content.
The component supports the following types:

- paragraph
- simple text
  - bold
  - italic
  - underline
  - hyperlink
- headlines 1 - 6
- list
  - unordered
  - ordered
- quote
- code (no syntax highlighting)
- image (url, width, height, alt)

### How to use it

Normally the data comes from the api and is a property of the control using the wysiwyg editor.

Example data:

```

protected readonly strapiContent: RootNode[] = [{
type: 'paragraph',
children: [{type: 'text', text: 'Hello World!'}, {type: 'text', text: 'This is a test.'}]
}, {
type: 'paragraph',
children: [{type: 'text', text: 'Hello World!'}, {type: 'text', text: 'This is a test.'}]
}];

```

Example template:

```

<bpa-strapi-renderer [content]="strapiContent"></bpa-strapi-renderer>

```

### Images

Images are rendered with `NgOptimizedImage` and loaded lazily. If the content starts with an image above the fold
(LCP image), set `prioritizeFirstImage` to load the first image eagerly with high fetch priority. All other images stay lazy.

```
<bpa-strapi-renderer [content]="strapiContent" [prioritizeFirstImage]="true"></bpa-strapi-renderer>
```

Add a preconnect for the image host to the `<head>` of your `index.html`, otherwise Angular warns in development mode:

```
<link rel="preconnect" href="https://your-strapi-host" />
```
