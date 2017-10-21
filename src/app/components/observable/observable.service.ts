import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Task } from '../../task';

@Injectable()
export class ObservableService {

    constructor(private http: Http) { }

    getTasks(): Observable<Task[]> {
        return this.http.get('/api/Data/GetTasks')
            .map(this.extractData)
            .catch(this.handleError);
    }

    addTask(task: Task): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('/api/Data/AddTask', JSON.stringify(task), options)
            .map(res => { return res; })
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        return res.json() || { };
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}