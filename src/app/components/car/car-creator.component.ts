import { Component, EventEmitter, Output } from '@angular/core';
import { Car } from '../../car';

@Component({
    selector: 'car-creator',
    templateUrl: 'car-creator.component.html'
})
export class CarCreatorComponent {
    car: Car = new Car();
    @Output() onAddCar = new EventEmitter<Car>();

    addCar() {
        if (
            !this.car.make ||
            !this.car.model ||
            !this.car.description ||
            !this.car.source ||
            !this.car.url
        ) { return; }
        this.onAddCar.emit(this.car);
        this.car = new Car();
    }
}
