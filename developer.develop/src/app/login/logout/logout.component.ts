import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router"
import {CookieService} from '../../lib/service/cookie.service';
import {UserService} from '../../lib/service/user.service';
import {User} from '../../lib/service/data/user';

@Component({
    selector: 'logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
    public message: string;

    constructor(private cookie: CookieService,
                private userServise: UserService,
                private router: Router
    ) {
    }

    ngOnInit() {
        this.userLogout();
    }

    private userLogout() {
        if (this.cookie['u_token'] != undefined) {

            let token = JSON.parse(this.cookie['u_status']).logoutToken;
            this.userServise.logout(token).subscribe(result => this.message = result);
            this.cookie.removeCookie('u_status');
            this.cookie.removeCookie('u_token');
            this.cookie.removeCookie('log_token');
            location.reload();
            return false;
        } else {

            setTimeout(() => {
                this.router.navigate(['/shop/product']);
            }, 1000);
            return false;
        }
    }
}
