import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  getUser() {
    return {
      name: 'Moshe',
      navigatorPermissionLevel: 5,
    };
  }
}
