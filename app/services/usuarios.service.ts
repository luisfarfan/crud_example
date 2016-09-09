import {
    Injectable
} from '@angular/core';
import {
    Http,
    Response,
    Headers
} from '@angular/http';
import {
    Observable
} from 'rxjs/Observable';
// Statics
import 'rxjs/add/observable/throw';
// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsuariosService {
    constructor(private http: Http) {}
    private usersUrl: string = 'http://192.168.200.123:8000/api/v1/usuarios/'; 

    getUsers(url:string=''): Observable < Object > {
        if(url!=''){
            return this.http.get(url).map(this.extractData)
        }else{
            return this.http.get(this.usersUrl).map(this.extractData)
        }
        
    }

    extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    newUser(json) {
        let data = JSON.stringify(json)
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.usersUrl, data, {
            headers: headers
        }).subscribe((data)=>{
            console.log(data)
        })
    }

    editUser(url:string, json){
        let data = JSON.stringify(json)
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(url,data,{
            headers: headers
        }).subscribe((data)=>{
            console.log(data)
        })

    }
}