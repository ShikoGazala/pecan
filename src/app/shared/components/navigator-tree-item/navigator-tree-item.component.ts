import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DatabaseService } from 'src/app/core/services/database.service';
import { UsersService } from 'src/app/core/services/users.service';
import { ItemNavigator } from '../../models/item-navigator.model';

@Component({
  selector: 'app-navigator-tree-item',
  templateUrl: './navigator-tree-item.component.html',
  styleUrls: ['./navigator-tree-item.component.scss'],
})
export class NavigatorTreeItemComponent implements OnInit {
  @Input() item: ItemNavigator = {} as ItemNavigator;
  constructor(
    private databaseService: DatabaseService,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    console.log(this.item);
  }

  itemClicked() {
    if (this.usersService.getUser().navigatorPermissionLevel <= this.item.level)
      return;
    this.item.isOpen = !this.item.isOpen;
    if (this.item.isOpen && !this.item.children) {
      this.databaseService.setItemClicked(this.item);
    }
  }
}
