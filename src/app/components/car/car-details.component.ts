import { Component, Input } from '@angular/core';
import { Car } from '../../car';

@Component({
    selector: 'car-details',
    templateUrl: 'car-details.component.html'
})
export class CarDetailsComponent {
    @Input() cars: Car[];
}
