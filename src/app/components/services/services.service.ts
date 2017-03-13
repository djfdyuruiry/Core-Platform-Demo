import { Injectable } from '@angular/core';

@Injectable()
export class ServicesService {
    tasks = [
        'First Task',
        'Second Task',
        'Third Task'
    ];
    constructor() { }
}
