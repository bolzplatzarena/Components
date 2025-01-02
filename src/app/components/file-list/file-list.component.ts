import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe, FontAwesomeModule, MatButtonModule, MatDividerModule, MatListModule],
})
export class FileListComponent {
  protected readonly folders = [
    {
      name: 'Folder 1',
      files: [
        {
          name: 'File 1',
          updated: new Date('1/1/16'),
        },
        {
          name: 'File 2',
          updated: new Date('1/1/16'),
        },
        {
          name: 'File 3',
          updated: new Date('11/11/16'),
        },
      ],
    },
    {
      name: 'Folder 12',
      files: [
        {
          name: 'File 12',
          updated: new Date('1/1/16'),
        },
        {
          name: 'File 22',
          updated: new Date('1/1/19'),
        },
        {
          name: 'File 32',
          updated: new Date('11/11/22'),
        },
      ],
    },
  ];
}
