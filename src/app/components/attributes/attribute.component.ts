import { Component } from '@angular/core';

@Component({
    selector: 'attribute-demo',
    templateUrl: 'attribute.component.html'
})
export class AttributeComponent {
    toggle: boolean = true;

    setToggle() {
        this.toggle = !this.toggle;
    }
}
