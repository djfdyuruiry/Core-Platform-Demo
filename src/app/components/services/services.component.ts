import { Component } from '@angular/core';
import { ServicesService } from './services.service';

@Component({
    selector: 'services-demo',
    templateUrl: 'services.component.html',
    styleUrls: ['services.component.css'],
    providers: [ ServicesService ]
})
export class ServicesComponent {
    constructor(public servicesService: ServicesService) { }
}
