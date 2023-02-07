import { Component } from '@angular/core';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss'],
})
export class FileListComponent {
  readonly folders = [
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
