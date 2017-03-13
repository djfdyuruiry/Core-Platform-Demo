import { Component, OnInit } from '@angular/core';
import { PromiseService } from './promise.service';
import { Task } from '../../task';

@Component({
    selector: 'promise-demo',
    templateUrl: 'promise.component.html',
    providers: [PromiseService]
})
export class PromiseComponent implements OnInit {
    errorMessage: string;
    tasks: Task[];
    task: Task;

    constructor(private taskService: PromiseService) {
        this.task = { title: '', completed: false };
    }

    ngOnInit() {
        this.getTasks();
    }

    getTasks() {
        this.taskService.getTasks()
            .then(
            tasks => this.tasks = tasks,
            error => this.errorMessage = <any>error);
    }

    addTask() {
        if (!this.task.title) {
            this.errorMessage = 'Title must have a value!';
            return;
        } else {
            this.errorMessage = '';
        }

        this.taskService.addTask(this.task)
            .then(
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
