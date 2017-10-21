import { Component, OnInit } from '@angular/core';
import { CarService } from './car.service';
import { Car } from '../../car';

@Component({
    selector: 'cars',
    templateUrl: 'cars.component.html',
    providers: [CarService]
})
export class CarsComponent implements OnInit {
    errorMessage: string;
    cars: Car[];
    car: Car = new Car();

    constructor(private carService: CarService) { }

    ngOnInit() {
        this.getCars();
    }

    getCars() {
        this.carService.getCars()
            .subscribe(
            cars => {
                this.cars = cars;
            },
            error => this.errorMessage = <any>error
            );
    }

    addCar(car: Car) {
        this.carService.addCar(car)
            .subscribe(
            () => {
                this.getCars();
            },
            error => this.errorMessage = <any>error
            );
    }

    onError(error: any) {
        this.errorMessage = error;
    }
}
