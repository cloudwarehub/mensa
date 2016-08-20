import {Component, ElementRef} from '@angular/core';
import {DateComponent} from './date.component';

@Component({
  selector: 'taskbar',
  template: `
    <startmenu></startmenu>
    <datetime></datetime>
    `,
  styleUrls: ['app/taskbar.component.css'],
  directives: [DateComponent]
})
export class TaskbarComponent {
}
