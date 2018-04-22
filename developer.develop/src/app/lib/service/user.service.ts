///<reference path="../../../../node_modules/rxjs/add/operator/map.d.ts"/>
import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {CookieService} from './cookie.service';
import {AddresService} from './addres.service';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import {map, filter} from 'rxjs/operators';
import * as _ from 'lodash';

import {Config} from '../../config/config'

import {User} from './data/user';

@Injectable()
export class UserService implements Resolve<any> {
    private config: Config = new Config();
    private baseUrl: string = this.config.baseUrl;
    private token: string;
    private loginStatus;
    public errorMessage = '';


    constructor(
        // private httpClient: HttpClient,
        private http: HttpClient,
        private cookie: CookieService,
        private addresService: AddresService) {
    }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> {
        return this.http.get(this.baseUrl).pipe(
            map(
                response => {
                    const res = response.json().data;
                    const user: User = new User(res.uid, res.mail, this.getToken());
                    const address: any[] = [];
                    // console.log(res);
                    user.mail = res.mail;
                    user.firstName = res.firstName;
                    user.lastName = res.lastName;
                    user.picture = res.picture;
                    user.telephone = res.telephone;

                    for (let i = 0; i < res.adress.length; i++) {
                        this.addresService.getAddres(res.adress[i].target_id).subscribe(
                            data => {
                                // this.addressArr = data;
                                address.push(data);
                                console.log(address);
                            }, error => this.errorMessage = error
                        );
                    }
                    user.address = address;
                    console.log(user);

                    return user;

                }
            ),
            // catch
            //     ((error: any) => Observable.throw(error.json().error || 'Server error'));
        )
            ;
    }


    public loginUserAccount(userData: any): any {
        const username = userData.login;
        const password = userData.pass;
        // let headers: Headers = new Headers();
        // headers.append("Authorization", "Basic " + btoa(username + ":" + password));
        // headers.append("Content-Type", "application/x-www-form-urlencoded");

        const body = JSON.stringify(
            {'name': userData.login, 'pass': userData.pass}
        );
        const httpOptions = {
            headers: new HttpHeaders({
                // 'X-CSRF-Token': token,
                'Content-type': 'application/json',
            })
        };
        return this.http.post(this.baseUrl + '/user/login?_format=json', body, httpOptions).pipe(
            map(this.extractLoginResponse),
    catch
        (this.handleError),
    )


    }

    public regUserAccount(userData) {
        if (this.getToken() != 'false') {
            this.token = this.getToken();

        } else {
            return Observable.throw('No Token');

        }

        const body = JSON.stringify(
            {
                'name': {'value': userData.form.value.email},
                'mail': {'value': userData.form.value.email},
                'pass': {'value': userData.form.value.pass}
            });

        // let body = JSON.stringify(
        //     {"name": "fooBar", "mail": "foo@bar.com", "pass": "secretSauce"}
        // );
        console.log(body);

        const options = new RequestOptions({
            headers: new Headers({
                'Content-type': 'application/json',
                'X-CSRF-Token': this.token,
                'Authorization': 'Token ' + this.token,
            })
        })
        return this.http.post(this.baseUrl + '/user/register?_format=json', body, options)
            .map(
                response => {
                    console.log(response.json());
                    return response.json();
                }
            ).catch(this.handleError);


    }

    public getUserStatus(): Observable<boolean> {

        const options = new RequestOptions({
            headers: new Headers({
                'X-CSRF-Token': this.getToken(),
                'Content-type': 'application/json',

                // 'Authorization': "Basic " + btoa(username + ":" + password),
            })
        })
        return this.http.get(this.baseUrl + '/user/status').map(response => {
            return response.json().data;
        })

    }

    public userData(uid: number, token: string): Observable<any> {

        const httpOptions = {
            headers: new HttpHeaders({
                'X-CSRF-Token': token,
                'Content-type': 'application/json',
            })
        };
        return this.http.get(this.baseUrl + '/user/id/' + uid, httpOptions)
        // this.http.get(this.baseUrl + '/user/' + uid + '?_format=json', options)
        // .toPromise()
            .map(
                (response: HttpResponse) => {
                    const res = response.json().data;
                    const user: User = new User(res.uid, res.mail, this.getToken());
                    const address: any[] = [];
                    // console.log(res);
                    user.mail = res.mail;
                    user.firstName = res.firstName;
                    user.lastName = res.lastName;
                    user.picture = res.picture;
                    user.telephone = res.telephone;

                    for (let i = 0; i < res.adress.length; i++) {
                        this.addresService.getAddres(res.adress[i].target_id).subscribe(
                            data => {
                                // this.addressArr = data;
                                address.push(data);
                                console.log(address);
                            }, error => this.errorMessage = error
                        );
                    }
                    user.address = address;
                    console.log(user);

                    return user;

                }
            ).catch(this.handleError);


    }

    // public createUser(userData): Observable<any> {
    //     let body = JSON.stringify(
    //         {
    //             "name": {"value": "fooBar"},
    //             "mail": {"value": "foo@bar.com"},
    //             "pass": {"value": "secretSauce"}
    //         }
    //     );
    //     let options = new RequestOptions({
    //         headers: new Headers({
    //             'Content-type': 'application/json',
    //         })
    //     });
    //
    //     return this.http.post(this.baseUrl + '/user/register?_format=json', body, options).map(response => {
    //
    //             console.log(response.json());
    //             return response.json().message;
    //         }
    //     );
    //
    // }

    public logout(token: string): Observable<any> {
        const body = JSON.stringify(
            {}
        );
        const options = new RequestOptions({
            headers: new Headers({
                'Content-type': 'application/json',
                // 'Authorization': "Basic " + btoa(username + ":" + password),
            })
        });

        return this.http.post(this.baseUrl + '/user/logout?_format=json&token=' + token, body, options).map(
            (response: Response) => {

                return response.json().message;

            }
        ).catch(this.handleError);
        ;

    }

    private getToken() {

        if (this.cookie['u_token'] != undefined) {
            this.token = JSON.parse(this.cookie['u_token']);
            return this.token;
        } else {
            return 'false';
        }
    }

    private extractLoginResponse(response: Response) {
        const res = response.json();
        if (res.message) {
            console.log(res.message);
            return res.message;
        }

        const user = new User(
            res.current_user.uid,
            res.current_user.name,
            res.csrf_token);
        user.logoutToken = res.logout_token;
        return user;
    }

    private mapUserCheked(response: Response) {
        const res = response.json();
        let checkout = '';
        for (let i = 0; i < 1; i++) {
            checkout = res[0].email;
        }
        console.log(checkout);
        return checkout;

    }

    private handleError(error: any, cought: Observable<any>): any {
        let message = '';

        if (error instanceof Response) {
            const errorData = error.json().error || JSON.stringify(error.json());
            message = `${error.status} - ${error.statusText || ''} ${errorData}`
        } else {
            message = error.message ? error.message : error.toString();
        }

        console.error(message);
        return Observable.throw(message);
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        return undefined;
    }


}
