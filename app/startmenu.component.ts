import {Component, ElementRef, Input} from '@angular/core';
@Component({
  selector: 'startmenu',
  template: `
    <img (click)="onStartClick()" class="start-logo" src="assets/windows_7_orb_icon_by_skyangels.png">
    <div *ngIf="open" class="startpopup">
    <div class="applications">
        <ul>
            <li><a href="#"><img src="assets/paint.jpg" alt="">Paint</a></li>
        </ul>
        
        <div class="search">
            <form action="">
            <input type="text" placeholder="Search programs and files">
            </form>
        </div>
	</div>
	<ul class="sysdir">
        <li class="user"><div class="frame" style="z-index: 43;">
          <div class="frame-inner" style="z-index: 9;">
          </div>
        </div>
      </li>
        <li><a href="#"><span>Documents</span></a></li>
        <li><a href="#"><span>Pictures</span></a></li>
        <li><a href="#"><span>Music</span></a></li>
        <li><a href="#"><span>Computer</span></a></li>
        <li><a href="#"><span>Network</span></a></li>
        <li><a href="#"><span>Connect to</span></a></li>
    </ul>
    </div>
    `,
  styleUrls: ['app/startmenu.component.css'],
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class StartmenuComponent {
  @Input()
  open: boolean;

  constructor(private _eref: ElementRef) { }

  onStartClick() {
    this.open = !this.open;
  }
  
  onClick(event) {
    if (!this._eref.nativeElement.contains(event.target)){
      this.open = false;
    }

  }
}
