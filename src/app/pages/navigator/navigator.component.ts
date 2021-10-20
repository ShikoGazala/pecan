import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DatabaseService } from 'src/app/core/services/database.service';
import { takeUntil } from 'rxjs/operators';
import { ItemNavigator } from 'src/app/shared/models/item-navigator.model';
@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
})
export class NavigatorComponent implements OnInit {
  data: ItemNavigator[] = [];
  private destroyed$: Subject<boolean> = new Subject();

  constructor(private databaseService: DatabaseService) {
    this.databaseService.getConnections().subscribe((res) => (this.data = res));

    this.databaseService
      .getItemClicked()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((res) => this.itemClicked(res));
  }

  ngOnInit(): void {}
  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  itemClicked(item: any) {
    switch (item.level) {
      case 1:
        this.databaseService
          .getDatabasesById(item)
          .subscribe((res) => (item.children = res));
        break;
      case 2:
        // this.databaseService
        //   .getSchemasById(item)
        //   .subscribe(res => (item.children = res));
        break;
      case 3:
        // this.databaseService.getTablesById(item).subscribe(res => (item.children = res));
        break;
      case 4:
        // this.databaseService.getColumnsById(item).subscribe(res => (item.children = res));
        break;
    }
  }
}
