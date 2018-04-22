import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {
    private baseUrl: string = 'http://mp.dev.devshop.odnodumci.com';


    constructor(private http: Http) {
    }

   
}
