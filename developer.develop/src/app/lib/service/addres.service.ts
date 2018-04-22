import {Injectable} from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {Addres} from './data/addres';
import {Config} from '../../config/config';
import {CookieService} from './cookie.service';


@Injectable()
export class AddresService {
    private baseUrl: string = 'http://mp.dev.devshop.odnodumci.com';
    public addresArr: Addres[] = [];
    private token: string;


    constructor(private http: HttpClient,
                private cookie: CookieService,) {
    }

    public getAddres(aids: string[]): Observable<any[]> {
        console.log(aids.length);
        // for (let i = 0; i < aids.length; i++) {
            console.log(+aids);
            this.token = this.getToken();
            const params = new HttpParams().set('Content-type', 'application/json');
            params.set('X-CSRF-Token', this.token);

            // let options = new RequestOptions({
            //     headers: new Headers({
            //         'Content-type': 'application/json',
            //         'X-CSRF-Token': ,
            //         // 'Authorization': "Token " + this.token,
            //     })
            // })

          return  this.http.get(this.baseUrl + '/address/' + +aids, {params})
                .map(data => {

                    const res: any = JSON.parse(data[0]);
                    console.log(res);
                    this.addresArr.push(new Addres(
                        res.id,
                        res.city,
                        res.street,
                        res.description,
                    ));
                    console.log(this.addresArr);
                    return this.addresArr;
                }).catch((error: any) => {
                  console.log(error);
                  return Observable.throw(error);
              });
        // }

    }

    private getToken() {

        if (this.cookie['u_token'] != undefined) {
            this.token = JSON.parse(this.cookie['u_token']);
            return this.token;
        } else {
            return 'false';
        }
    }
    // private handleError(error: any, cought: Observable<any>): any {
    //     let message = "";
    //
    //     if (error instanceof Response) {
    //         let errorData = error.json().error || JSON.stringify(error.json());
    //         message = `${error.status} - ${error.statusText || ''} ${errorData}`
    //     } else {
    //         message = error.message ? error.message : error.toString();
    //     }
    //
    //     console.error(message);
    //     return Observable.throw(message);
    // }


}
