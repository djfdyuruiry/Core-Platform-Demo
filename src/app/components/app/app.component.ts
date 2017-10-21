import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    toggleSidebar() {
        ($('.ui.sidebar') as any).sidebar({
            context: $('#pushable-container'),
            transition: 'overlay'
        }).sidebar('toggle');
    }
}
