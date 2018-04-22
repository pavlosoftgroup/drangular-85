import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router"
import {CookieService} from '../../lib/service/cookie.service';
import {UserService} from '../../lib/service/user.service';
import {User} from '../../lib/service/data/user';

@Component({
    selector: 'registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

    public nottouched = true;
    public touched = false;
    public text: any;
    public errorMessage: string;

    constructor(private userService: UserService,
    ) {
    }

    ngOnInit() {
    }

    private onSubmit(formReg) {
        this.userService.regUserAccount(formReg).subscribe(data => {
                this.text = data;
                console.log(this.text);

            }, error => this.errorMessage = error
        )

    }

}
