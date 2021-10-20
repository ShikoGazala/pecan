import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorTreeItemComponent } from './shared/components/navigator-tree-item/navigator-tree-item.component';
import { NavigatorComponent } from './pages/navigator/navigator.component';

@NgModule({
  declarations: [AppComponent, NavigatorTreeItemComponent, NavigatorComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
