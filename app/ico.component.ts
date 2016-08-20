import { Component } from '@angular/core';
@Component({
    selector: 'ico',
    template: `
       <li>
            <a href="#">
            <img src={{IcoComponent.source}} style="height: 64px;"><br />
            {{IcoComponent.name}}</a>
       </li>
       <!--
            <li>
                <a href="#">
                <img src="assets/trash-icon.png" style="height: 64px;"><br />
                回收站</a>
            </li>
            <li>
                <a href="#">
                <img src="assets/windows-7-ie-icon.png" style="height: 64px;"><br />
                Internet<br /> Explorer</a>
            </li>-->
    `

})
export class IcoComponent {
    constructor(public source:string,public name:string){}
}
