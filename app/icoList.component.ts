import { Component } from '@angular/core';
import {IcoComponent} from "./ico.component";
@Component({
    selector: 'icoList',
    template: `

    <ul id="app">
        <li *ngFor="let ico of icos">
            <a href="#">
            <img src={{ico.source}} style="height: 64px;"><br />
            {{ico.name}}</a>
        </li>
    </ul>
    `

})
export class IcoListComponent {
    icos=[
        new IcoComponent("assets/windows-7-system-icon.png","我的电脑"),
        new IcoComponent("assets/trash-icon.png","回收站"),
        new IcoComponent("assets/windows-7-ie-icon.png","Internet Explorer")];
    public addIco(ico){
        this.icos.push(ico);
    }



}
