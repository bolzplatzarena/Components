import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {RootNode, StrapiRendererComponent} from '@bolzplatzarena/components/strapi';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons/faEllipsisVertical';
import {faFile} from '@fortawesome/free-solid-svg-icons/faFile';
import {faTrash} from '@fortawesome/free-solid-svg-icons/faTrash';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {DialogsComponent} from './components/dialogs/dialogs.component';
import {EnumComponent} from './components/enum/enum.component';
import {FileListComponent} from './components/file-list/file-list.component';
import {FullTableComponent} from './components/full-table/full-table.component';
import {LoadingComponent} from './components/loading/loading.component';
import {TableComponent} from './components/table/table.component';
import * as de from './i18n/de.json';
import * as en from './i18n/en.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatButtonToggleModule,
    MatTabsModule,
    TableComponent,
    DialogsComponent,
    EnumComponent,
    FileListComponent,
    TranslateModule,
    FullTableComponent,
    LoadingComponent,
    StrapiRendererComponent,
  ]
})
export class AppComponent {
  private readonly translate = inject(TranslateService);
  protected readonly strapiContent: RootNode[] = [
    {
      "type": "heading",
      "children": [
        {
          "type": "text",
          "text": "Headline 1"
        }
      ],
      "level": 1
    },
    {
      "type": "heading",
      "children": [
        {
          "type": "text",
          "text": "Headline 2"
        }
      ],
      "level": 2
    },
    {
      "type": "heading",
      "children": [
        {
          "type": "text",
          "text": "Headline 3"
        }
      ],
      "level": 3
    },
    {
      "type": "heading",
      "children": [
        {
          "type": "text",
          "text": "Headline 4"
        }
      ],
      "level": 4
    },
    {
      "type": "heading",
      "children": [
        {
          "type": "text",
          "text": "Headline 5"
        }
      ],
      "level": 5
    },
    {
      "type": "heading",
      "children": [
        {
          "type": "text",
          "text": "Headline 6"
        }
      ],
      "level": 6
    },
    {
      "type": "list",
      "format": "ordered",
      "children": [
        {
          "type": "list-item",
          "children": [
            {
              "type": "text",
              "text": "Test"
            }
          ]
        },
        {
          "type": "list-item",
          "children": [
            {
              "type": "text",
              "text": "Test 2"
            }
          ]
        },
        {
          "type": "list-item",
          "children": [
            {
              "type": "text",
              "text": "Test 3"
            }
          ]
        }
      ]
    },
    {
      "type": "list",
      "format": "unordered",
      "children": [
        {
          "type": "list-item",
          "children": [
            {
              "type": "text",
              "text": "Bullet 1"
            }
          ]
        },
        {
          "type": "list-item",
          "children": [
            {
              "type": "text",
              "text": "Bullet 2"
            }
          ]
        },
        {
          "type": "list-item",
          "children": [
            {
              "type": "text",
              "text": "Bullet 3"
            }
          ]
        }
      ]
    },
    {
      "type": "quote",
      "children": [
        {
          "type": "text",
          "text": "Mein cooles Zitat"
        }
      ]
    },
    {
      "type": "code",
      "children": [
        {
          "type": "text",
          "text": "var test = '';"
        }
      ],
      "language": "plaintext"
    },
    {
      "type": "paragraph",
      "children": [
        {
          "type": "text",
          "text": ""
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "type": "text",
          "text": ""
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "type": "text",
          "text": ""
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "type": "text",
          "text": ""
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "type": "text",
          "text": "Seit einigen Wochen nutze ich Matomo für die Analyse der Nutzung von Webseiten. Nach dem letzten Update wollte ich die Tutorials zu Ende machen, welche man als Administrator angezeigt bekommt. Man hat das Gefühl, dass man so das System näher kennen lernt. Allerdings kann man im System etwas einstellen, was man nun so nicht erwartet hat. Vor allem wenn man vielleicht eine Sache nicht ganz zu Ende gebracht hat."
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "type": "text",
          "text": "Wie bemerkt man den \"Fehler\": Sowohl in der App als auch im Dashboard der Webanwendung fallen die Zahlen im Graph der letzten Besuche auf 0. Dabei bleiben die \""
        },
        {
          "type": "text",
          "text": "alten",
          "underline": true
        },
        {
          "type": "text",
          "text": "\" Daten erhalten. Die Daten des aktuellen Tages - also das Besucher-Log - war aber weiterhin gefüllt."
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "type": "text",
          "text": "Matomo schlug vor, die Art der Archivierung von Daten zu ändern. Leichtgläubig bin ich davon ausgegangen, dass es sich um alte Daten handelt, welche ich mir nicht mehr ansehen will, weil diese eben veraltet sind. Aber es handelte sich um die Umwandlung von Daten des aktuellen Tages in die historische Daten. "
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "type": "text",
          "text": "Was ich also eingestellt hatte, war dass diese Umwandlung nicht mehr ständig passiert. Stattdessen sollte man eine Cronjob einrichtigen oder eine Alternativ dazu. Das hatte ich aber schlichtweg vergessen."
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "type": "text",
          "text": "Was man also tun kann, ist auf folgender Seite beschrieben: "
        },
        {
          "type": "link",
          "url": "https://matomo.org/docs/setup-auto-archiving/#web-cron-when-your-web-host-does-not-support-cron-tasks",
          "children": [
            {
              "type": "text",
              "text": "https://matomo.org/docs/setup-auto-archiving/#web-cron-when-your-web-host-does-not-support-cron-tasks"
            }
          ]
        },
        {
          "text": "",
          "type": "text"
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "type": "text",
          "text": "Wer schneller Unterstützung bzw. eine kleine Lösung benötigt. Ruft die Archivierung unter Nutzung des Auth Tokenes einfach selber auf:"
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "type": "text",
          "text": "https://DOMAIN/PFAD/matomo/misc/cron/archive.php?token_auth=TOKEN"
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "type": "text",
          "text": "Man muss nur "
        },
        {
          "type": "text",
          "text": "DOMAIN",
          "italic": true
        },
        {
          "type": "text",
          "text": ", "
        },
        {
          "type": "text",
          "text": "PFAD",
          "italic": true
        },
        {
          "type": "text",
          "text": " und "
        },
        {
          "type": "text",
          "text": "TOKEN",
          "italic": true
        },
        {
          "type": "text",
          "text": " adäquat ersetzen. "
        },
        {
          "type": "text",
          "text": "DOMAIN",
          "italic": true
        },
        {
          "type": "text",
          "text": " und "
        },
        {
          "type": "text",
          "text": "PFAD",
          "italic": true
        },
        {
          "type": "text",
          "text": " sollte man kennen und den Token findet man in den Einstellungen."
        }
      ]
    }
  ];


  constructor() {
    const library = inject(FaIconLibrary);
    const translate = this.translate;

    translate.setTranslation('en', en, true);
    translate.setTranslation('de', de, true);
    translate.use('de');

    library.addIcons(faFile);
    library.addIcons(faEllipsisVertical);
    library.addIcons(faTrash);
  }

  protected setLanguage(lang: string): void {
    this.translate.use(lang);
  }
}
