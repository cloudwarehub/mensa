"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var StartmenuComponent = (function () {
    function StartmenuComponent(_eref) {
        this._eref = _eref;
    }
    StartmenuComponent.prototype.onStartClick = function () {
        this.open = !this.open;
    };
    StartmenuComponent.prototype.onClick = function (event) {
        if (!this._eref.nativeElement.contains(event.target)) {
            this.open = false;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], StartmenuComponent.prototype, "open", void 0);
    StartmenuComponent = __decorate([
        core_1.Component({
            selector: 'startmenu',
            template: "\n    <img (click)=\"onStartClick()\" class=\"start-logo\" src=\"assets/windows_7_orb_icon_by_skyangels.png\">\n    <div *ngIf=\"open\" class=\"startpopup\">\n    <div class=\"applications\">\n        <ul>\n            <li><a href=\"#\"><img src=\"assets/paint.jpg\" alt=\"\">Paint</a></li>\n        </ul>\n        \n        <div class=\"search\">\n            <form action=\"\">\n            <input type=\"text\" placeholder=\"Search programs and files\">\n            </form>\n        </div>\n\t</div>\n\t<ul class=\"sysdir\">\n        <li class=\"user\"><div class=\"frame\" style=\"z-index: 43;\">\n          <div class=\"frame-inner\" style=\"z-index: 9;\">\n          </div>\n        </div>\n      </li>\n        <li><a href=\"#\"><span>Documents</span></a></li>\n        <li><a href=\"#\"><span>Pictures</span></a></li>\n        <li><a href=\"#\"><span>Music</span></a></li>\n        <li><a href=\"#\"><span>Computer</span></a></li>\n        <li><a href=\"#\"><span>Network</span></a></li>\n        <li><a href=\"#\"><span>Connect to</span></a></li>\n    </ul>\n    </div>\n    ",
            styleUrls: ['app/startmenu.component.css'],
            host: {
                '(document:click)': 'onClick($event)',
            },
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], StartmenuComponent);
    return StartmenuComponent;
}());
exports.StartmenuComponent = StartmenuComponent;
//# sourceMappingURL=startmenu.component.js.map