import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {UserService} from '../../lib/service/user.service';


@Component({
    selector: 'user-page',
    templateUrl: './user-page.component.html',
    styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
    public icon: boolean = false;


    constructor(
        private router: Router,
        private activeRoute: ActivatedRoute,
        private userService: UserService,
    ) {
    }

    ngOnInit() {
        this.userService.getUserStatus().subscribe(data => this.icon = data);

        console.log(this.icon);
    }

}
