import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CookieService} from '../../lib/service/cookie.service';
import {UserService} from '../../lib/service/user.service';
import {User} from '../../lib/service/data/user';
import {Observable} from 'rxjs/Observable';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AddresComponent} from '../../shop/addres/addres.component';


@Component({
    selector: `current-user`,
    templateUrl: './current-user.component.html',
    styleUrls: ['./current-user.component.css'],
    // providers: [{provide: MatFormFieldControl, useExisting: MyTelInput}],
})
export class CurrentUserComponent implements OnInit {
    public user: User;
    private uid: number;
    public editStatus = false;

    public firstName: string;
    public lastName: string;
    public emailUser: string;
    public telUser: string;
    public errorMessage = 'Error';

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
        private cookie: CookieService,
    ) {
        // this.getUserData();
        // console.log(this.user);

    }

    ngOnInit() {
        this.user = this.route.snapshot.data['current', 'id'];
        console.log(this.user);
    }

    onSubmit(form) {

        console.log(form.valid);
        console.log(form.value);

    }

    public toggleEdit() {
        this.editStatus = !this.editStatus;


    }


    public getUserData() {
        let user: User;

        // let user: User;
        // if (this.cookie['u_status'] != 'undefined') {
        //
        // } else {
        //     this.router.navigate(['/user', 'login']);
        //     return false;
        //
        // }


        this.activatedRoute.params.forEach((params: Params) => {

            this.uid = +params['id'];
            // this.getUserData(id);
        });
        const token = JSON.parse(this.cookie['u_status']).token;
        console.log(token);

        this.userService.userData(this.uid, token).subscribe(data => {
            user = data;
            this.user = user;

            console.log(this.user);
            console.log(user);
            // return this.user;
            // return this.user;

        }.error => this.errorMessage = error);


        // return user;


    }


}
