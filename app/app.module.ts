import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {TaskbarComponent} from './taskbar.component';
import {StartmenuComponent} from  './startmenu.component';
import {DateComponent} from './date.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppComponent,
        TaskbarComponent,
        StartmenuComponent,
        DateComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
