import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {TaskbarComponent} from './taskbar.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppComponent,
        TaskbarComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
