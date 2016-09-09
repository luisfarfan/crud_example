import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()   
export class MenuServices {
  constructor (private http: Http) {}

  private menusUrl = 'http://192.168.200.123:8000/api/menu/';
  private routesUrl = 'http://192.168.200.123:8000/api/routes/';
  
  GetMenuLinks(): Observable<Object> {
    return this.http.get(this.menusUrl) 
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getRoutes(parametros): Observable<Object> {
      return this.http.get(this.routesUrl)
            .map(this.extractData)
            .catch(this.handleError)
  }
 
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
