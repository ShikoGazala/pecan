import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { ItemNavigator } from 'src/app/shared/models/item-navigator.model';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private itemClicked$ = new Subject();
  data: ItemNavigator[] = [
    {
      name: 'Connection 1',
      id: 'Connection 1',
      level: 1,
      isOpen: false,
      icon: 'database',
      children: [
        {
          name: 'Database 1',
          id: 'Database 1',
          hierarchy: ['Connection 1', 'Database 1'],
          level: 2,
          isOpen: false,
          icon: 'database',
          children: [
            {
              name: 'Schema 1',
              id: 'Schema 1',
              hierarchy: ['Connection 1', 'Database 1', 'Schema 1'],
              level: 3,
              isOpen: false,
              icon: 'database2',
              children: [
                {
                  name: 'Table 1',
                  id: 'Table 1',
                  hierarchy: [
                    'Connection 1',
                    'Database 1',
                    'Schema 1',
                    'Table 1',
                  ],
                  level: 4,
                  isOpen: false,
                  icon: 'database3',
                  children: [
                    {
                      name: 'Column 1',
                      id: 'Column 1',
                      hierarchy: [
                        'Connection 1',
                        'Database 1',
                        'Schema 1',
                        'Table 1',
                        'Column 1',
                      ],
                      level: 5,
                      isOpen: false,
                      icon: 'database4',
                    },
                  ],
                },
              ],
            },
            {
              name: 'Schema 2',
              id: 'Schema 2',
              icon: 'database2',
              hierarchy: ['Connection 1', 'Database 1', 'Schema 2'],
              level: 3,
              isOpen: false,
            },
          ],
        },
        {
          name: 'Database 2',
          id: 'Database 2',
          hierarchy: ['Connection 1', 'Database 2'],
          level: 2,
          isOpen: false,
          icon: 'database4',
          children: [
            {
              name: 'Schema 22',
              id: 'Schema 22',
              hierarchy: ['Connection 1', 'Database 2', 'Schema 22'],
              level: 3,
              isOpen: false,
              icon: 'database',
              children: [
                {
                  name: 'Table 22',
                  id: 'Table 22',
                  hierarchy: [
                    'Connection 1',
                    'Database 2',
                    'Schema 22',
                    'Table 22',
                  ],
                  level: 4,
                  isOpen: false,
                  icon: 'database2',
                  children: [
                    {
                      name: 'Column 22',
                      id: 'Column 22',
                      hierarchy: [
                        'Connection 1',
                        'Database 2',
                        'Schema 22',
                        'Table 22',
                        'Column 22',
                      ],
                      level: 5,
                      isOpen: false,
                      icon: 'database3',
                    },
                  ],
                },
              ],
            },
            {
              name: 'Schema 23',
              id: 'Schema 23',
              hierarchy: ['Connection 1', 'Database 2', 'Schema 23'],
              level: 3,
              isOpen: false,
              icon: 'database4',
            },
          ],
        },
      ],
    },
  ];
  constructor(private http: HttpClient) {}

  setItemClicked(item: ItemNavigator) {
    this.itemClicked$.next(item);
  }
  getItemClicked() {
    return this.itemClicked$.asObservable();
  }

  getConnections(): Observable<ItemNavigator[]> {
    // http get to db/connections/
    return of(
      this.data.map((d) => {
        const { children, ...other } = d;
        return other;
      })
    );
  }

  getDatabasesById(item: ItemNavigator): Observable<ItemNavigator[]> {
    // http get to db/connections/item.hierarchy[0]/databases
    const result: any = this.data.find((d) => d.id === item.id);
    return of(result.children);
    // return result.children.map((a: ItemNavigator) => {
    //   const { children, ...other } = a;
    //   return other;
    // });
  }

  getSchemasById(item: ItemNavigator) {
    return this.http.get(
      `db/connections/${item.hierarchy && item.hierarchy[0]}/databases/${
        item.hierarchy && item.hierarchy[1]
      }/schemas/${item.id}`
    );
  }

  getTablesById(item: ItemNavigator): any {
    // http get to db/connections/item.hierarchy[0]/databases/item.hierarchy[1]/schemas/item.hierarchy[2]/tables/item.id
  }

  getColumnsById(item: ItemNavigator): any {
    // http get to db/connections/item.hierarchy[0]/databases/item.hierarchy[1]/schemas/item.hierarchy[2]/tables/item.hierarchy[3]/columns/item.id
  }
}
