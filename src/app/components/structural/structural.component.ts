import { Component } from '@angular/core';

@Component({
    selector: 'structural-demo',
    templateUrl: 'structural.component.html'
})
export class StructuralComponent {
    toggle = true;
    tasks: Array<string> = [
        'Finish Angular notes',
        'Finish Bootstrap tutorial',
        'Write Web App for Azure'
    ];
    categories: Array<string> = [
        'business',
        'leisure',
        'research'
    ];
    category = '';

    setToggle() {
        this.toggle = !this.toggle;
    }
}
