import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    lat: number = 50.45466;
    lng: number = 30.5238;
    public fullname:string;
    public email:string;
    public subject:string;
    public message:string;

    constructor(public snackBar: MatSnackBar) {}

    ngOnInit() {
    }

    onSubmit(e){
        this.openSnackBar('Message has been sent', 'Done');
    }

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
          duration: 2000,
        });
    }
}
