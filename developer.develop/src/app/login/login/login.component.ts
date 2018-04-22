import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {CookieService} from '../../lib/service/cookie.service';
import {UserService} from '../../lib/service/user.service';
import * as _ from "lodash";
import {User} from "../../lib/service/data/user";


@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    private uid: number;
    public login: string = '';
    private pass: string;
    private token: string = '';
    public nottouched = true;
    public touched = false;
    public user: User;
    private userToken: string = '';
    private logoutToken: string = '';
    public errorLoginMessage: boolean = false;
    public errorMess: string;


    constructor(private router: Router,
                private cookie: CookieService,
                private userService: UserService) {
    }

    ngOnInit() {
        console.log(JSON.parse(this.cookie['u_status']));
        if (this.cookie['u_status'] != 'undefined') {

            let id = JSON.parse(this.cookie['u_status']).uid;
            // console.log(JSON.parse(id).uid);

            this.router.navigate(['/user/current/', id]);
            return false;
        }
    }


    // Submit
    onSubmit(formLogin) {

        // this.token = this.userService.authUser();
        this.userService.loginUserAccount(formLogin.value).subscribe(data => {
                console.log(data);

                if (data.uid != undefined) {

                    this.addUserToBrowser(data);
                }
                // return false;


            }, error => {
                this.errorMess = error;
                this.errorLoginMessage = true;

            }
        );
        // if (this.user.message != undefined) {
        //     console.log(this.user.message);
        //     return this.user.message;
        //


    }

    private addUserToBrowser(data) {
        this.touched = !this.touched;
        this.nottouched = !this.nottouched;
        this.user = data;
        this.uid = this.user.uid;
        this.userToken = this.user.token;
        this.logoutToken = this.user.logoutToken;

        console.log(this.user);
        console.log(this.userToken);
        console.log(this.logoutToken);
        this.cookie.addCookie('u_status', JSON.stringify(this.user));
        this.cookie.addCookie('u_token', JSON.stringify(this.userToken));
        this.cookie.addCookie('log_token', JSON.stringify(this.logoutToken));
        // this.cookie.addCookie('u_status', JSON.stringify(this.user));
        // this.cookie.addCookie('u_token', JSON.stringify(this.userToken));
        // this.cookie.addCookie('log_token', JSON.stringify(this.logoutToken));


        this.router.navigate(['/user/current/' + this.uid]);

    }

}
