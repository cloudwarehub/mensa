import {Component} from '@angular/core';
@Component({
    selector: 'datetime',
    template: `
    <time>19:02</time>
    <date>2016/6/29</date>
    `,
    styles: [`
    :host {
    width: 70px;
    display: block;
    float: right;
    padding: 5px;
    }
    time, date {
    color: #ddd;
    text-align: center;
    display: block;
    }
    `]
})
export class DateComponent {
}
