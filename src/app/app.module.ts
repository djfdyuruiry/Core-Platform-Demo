import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './components/app/app.component';
import { AttributeComponent } from './components/attributes/attribute.component';
import { BindingComponent } from './components/binding/binding.component';
import { CarsComponent } from './components/car/cars.component';
import { CarDetailsComponent } from './components/car/car-details.component';
import { CarCreatorComponent } from './components/car/car-creator.component';
import { CarCommentsComponent } from './components/car/car-comments.component';
import { ObservableComponent } from './components/observable/observable.component';
import { PromiseComponent } from './components/promise/promise.component';
import { ServicesComponent } from './components/services/services.component';
import { StructuralComponent } from './components/structural/structural.component';
import { WikiComponent } from './components/wiki/wiki.component';

const appRoutes: Routes = [
    {
        path: 'attribute-directives', component: AttributeComponent
    },
    {
        path: 'binding', component: BindingComponent
    },
    {
        path: 'complex-components', component: CarsComponent
    },
    {
        path: 'observable', component: ObservableComponent
    },
    {
        path: 'promise', component: PromiseComponent
    },
    {
        path: 'services', component: ServicesComponent
    },
    {
        path: 'structural-directives', component: StructuralComponent
    },
    {
        path: 'jsonp', component: WikiComponent
    },
    {
        path: '', redirectTo: '/attribute-directives', pathMatch: 'full'
    },
    {
        path: '**', redirectTo: '/attribute-directives'
    }
];

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        AttributeComponent,
        BindingComponent,
        CarsComponent,
        CarDetailsComponent,
        CarCreatorComponent,
        CarCommentsComponent,
        ObservableComponent,
        PromiseComponent,
        ServicesComponent,
        StructuralComponent,
        WikiComponent
    ],
    imports: [
        UniversalModule, // must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ]
})
export class AppModule { }
