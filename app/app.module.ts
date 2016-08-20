import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {TaskbarComponent} from './taskbar.component';
import {StartmenuComponent} from "./startmenu.component";

import {StartmenuComponent} from  './startmenu.component';
import {IcoComponent} from "./ico.component";
import {IcoListComponent} from "./icoList.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    TaskbarComponent,
    StartmenuComponent,
    IcoComponent,
    IcoListComponent

  ],
  bootstrap: [AppComponent]

})
export class AppModule {
}
