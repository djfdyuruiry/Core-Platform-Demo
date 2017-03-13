import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { Subject } from 'rxjs/Subject';

import { WikipediaService } from './wikipedia.service';

@Component({
    selector: 'wiki-demo',
    templateUrl: 'wiki.component.html',
    providers: [WikipediaService]
})
export class WikiComponent implements OnInit {
    baseUrl: string = 'https://en.wikipedia.org/wiki/';
    items: Observable<string[]>;
    private searchTermStream = new Subject<string>();

    constructor(private wikipediaService: WikipediaService) { }

    search(term: string) { this.searchTermStream.next(term); }

    ngOnInit() {
        this.items = this.searchTermStream
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap((term: string) => this.wikipediaService.search(term));
    }
}
