import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {CookieService} from '../../lib/service/cookie.service';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardProdut implements OnInit {
    private orderbyprice: boolean = false;
    private orderbyname: boolean = false;
    private userStatus: boolean = false;

    constructor(
        private cookie: CookieService,
        private router: Router,
        private activeRoute: ActivatedRoute
    ){}

    ngOnInit(){}

}
