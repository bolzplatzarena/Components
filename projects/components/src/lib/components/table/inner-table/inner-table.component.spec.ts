import { TestBed } from '@angular/core/testing';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { provideTranslateService } from '@ngx-translate/core';
import { ColumnConfig, ColumnType, InnerTableComponent } from './inner-table.component';

interface Row {
  name?: string;
  level?: number;
  birthday?: Date | string;
}

describe('InnerTableComponent sorting', () => {
  beforeEach(() => TestBed.configureTestingModule({ providers: [provideTranslateService()] }));

  const sortBy = (dataset: Row[], column: keyof Row, columnConfig: { [key: string]: ColumnConfig<Row> } = {}): (string | undefined)[] => {
    const fixture = TestBed.createComponent(InnerTableComponent<Row>);
    fixture.componentRef.setInput('columns', ['name', 'level', 'birthday']);
    fixture.componentRef.setInput('displayedColumns', ['name', 'level', 'birthday']);
    fixture.componentRef.setInput('columnConfig', columnConfig);
    fixture.componentRef.setInput('dataset', dataset);
    fixture.detectChanges();

    const dataSource = (fixture.componentInstance as unknown as { dataSource: MatTableDataSource<Row> }).dataSource;
    const sort = { active: column, direction: 'asc' } as MatSort;
    return dataSource.sortData([...dataSource.data], sort).map(row => row.name);
  };

  it('sorts dates chronologically and puts missing dates first', () => {
    const rows = [
      { name: 'b', birthday: new Date(2000, 0, 1) },
      { name: 'none' },
      { name: 'a', birthday: '1990-05-01' },
      { name: 'c', birthday: new Date(2010, 0, 1) },
    ];

    expect(sortBy(rows, 'birthday', { birthday: { type: ColumnType.Date } })).toEqual(['none', 'a', 'b', 'c']);
  });

  it('sorts numbers numerically and puts missing numbers first', () => {
    const rows = [{ name: 'ten', level: 10 }, { name: 'none' }, { name: 'nine', level: 9 }];

    expect(sortBy(rows, 'level', { level: { type: ColumnType.Number } })).toEqual(['none', 'nine', 'ten']);
  });

  it('does not sort a missing text as the word "undefined"', () => {
    const rows = [{ name: 'zoe' }, { level: 1 }, { name: 'tom' }];

    expect(sortBy(rows, 'name')).toEqual([undefined, 'tom', 'zoe']);
  });
});
