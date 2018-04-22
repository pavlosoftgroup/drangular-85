import {Component, OnInit} from '@angular/core';
import {UserService} from "../../lib/service/user.service";

@Component({
    selector: 'forgot-pass',
    templateUrl: './forgot-pass.component.html',
    styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {
    public email: string;
    public nottouched = true;
    public touched = false;

    constructor() {
    }

    ngOnInit() {
    }

}
