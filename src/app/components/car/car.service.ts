import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Car } from '../../car';
import { Comment } from '../../comment';

@Injectable()
export class CarService {
    constructor(private http: Http) { }

    getCars(): Observable<Car[]> {
        return this.http.get('/api/Data/GetCars')
            .map(this.extractData)
            .catch(this.handleError);
    }

    addCar(car: Car): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(car);

        return this.http.post('/api/Data/AddCar', body, options)
            .map(res => { return res; })
            .catch(this.handleError);
    }

    getComments(): Observable<Comment[]> {
        return this.http.get('/api/Data/GetComments')
            .map(this.extractData)
            .catch(this.handleError);
    }

    addComment(comment: Comment): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('/api/Data/AddComment', JSON.stringify(comment), options)
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
