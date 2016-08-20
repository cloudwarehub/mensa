import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {TaskbarComponent} from './taskbar.component';
import {StartmenuComponent} from  './startmenu.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    TaskbarComponent,
    StartmenuComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
