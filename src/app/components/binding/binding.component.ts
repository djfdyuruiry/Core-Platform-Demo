import { Component } from '@angular/core';

@Component({
    selector: 'binding-demo',
    templateUrl: 'binding.component.html'
})
export class BindingComponent {
    num = 7;
    color = 'black';

    setNum() {
        this.num++;

        if (this.num > 10) {
            this.num = 1;
        }
    }
}
