import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CarService } from './car.service';
import { Comment } from '../../comment';

@Component({
    selector: 'car-comments',
    templateUrl: 'car-comments.component.html'
})
export class CarCommentsComponent implements OnInit {
    @Output() onError = new EventEmitter<any>();
    comment: Comment = new Comment();
    comments: Comment[];

    constructor(private carService: CarService) { }

    ngOnInit() {
        this.getComments();
    }

    getComments() {
        this.carService.getComments()
            .subscribe(
            comments => {
                this.comments = comments;
            },
            error => this.onError.emit(<any>error)
            );
    }

    addComment() {
        if (!this.comment.name || !this.comment.comment) {
            this.onError.emit('Name and comment need to be provided to post a reply!');
            return;
        }

        this.carService.addComment(this.comment)
            .subscribe(
            () => {
                this.getComments();
                this.comment = new Comment();
            },
            error => this.onError.emit(<any>error)
            );
    }
}
