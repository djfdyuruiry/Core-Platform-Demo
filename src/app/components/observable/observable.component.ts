import { Component, OnInit } from '@angular/core';
import { ObservableService } from './observable.service';
import { Task } from '../../task';

@Component({
    selector: 'observable-demo',
    templateUrl: 'observable.component.html',
    providers: [ ObservableService ]
})
export class ObservableComponent implements OnInit {
    errorMessage: string;
    tasks: Task[];
    task: Task;

    constructor(private taskService: ObservableService) {
        this.task = { title: '', completed: false };
    }

    ngOnInit() {
        this.getTasks();
    }

    getTasks() {
        this.taskService.getTasks()
            .subscribe(
            tasks => {
                this.tasks = tasks;
            },
            error => this.errorMessage = <any>error
            );
    }

    addTask() {
        if (!this.task.title) {
            this.errorMessage = 'Title must have a value!';
            return;
        } else {
            this.errorMessage = '';
        }

        this.taskService.addTask(this.task)
            .subscribe(
            () => {
                this.getTasks();
                this.task = { title: '', completed: false };
            },
            error => this.errorMessage = <any>error
            );
    }

    toggleComplete(task: Task) {
        task.completed = !task.completed;
    }
}
