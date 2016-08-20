import {Component} from '@angular/core';
import {DateComponent} from './date.component';

@Component({
  selector: 'taskbar',
  template: `
    <div class="start" (click)="onStartClick()"><img src="assets/windows_7_orb_icon_by_skyangels.png"><startmenu *ngIf="open"></startmenu></div>
    <datetime></datetime>
    `,
  styleUrls: ['app/taskbar.component.css'],
  directives: [DateComponent]
})
export class TaskbarComponent {
  open: false;
  onStartClick() {
    this.open = !this.open;
  }
}
