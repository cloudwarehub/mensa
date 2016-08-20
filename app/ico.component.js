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
var IcoComponent = (function () {
    function IcoComponent(source, name) {
        this.source = source;
        this.name = name;
    }
    IcoComponent = __decorate([
        core_1.Component({
            selector: 'ico',
            template: "\n       <li>\n            <a href=\"#\">\n            <img src={{IcoComponent.source}} style=\"height: 64px;\"><br />\n            {{IcoComponent.name}}</a>\n       </li>\n       <!--\n            <li>\n                <a href=\"#\">\n                <img src=\"assets/trash-icon.png\" style=\"height: 64px;\"><br />\n                \u56DE\u6536\u7AD9</a>\n            </li>\n            <li>\n                <a href=\"#\">\n                <img src=\"assets/windows-7-ie-icon.png\" style=\"height: 64px;\"><br />\n                Internet<br /> Explorer</a>\n            </li>-->\n    "
        }), 
        __metadata('design:paramtypes', [String, String])
    ], IcoComponent);
    return IcoComponent;
}());
exports.IcoComponent = IcoComponent;
//# sourceMappingURL=ico.component.js.map