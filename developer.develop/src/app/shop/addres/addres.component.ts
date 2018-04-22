import {Component, OnInit, Input, EventEmitter} from '@angular/core';
import {AddresService} from '../../lib/service/addres.service';

import {Addres} from "../../lib/service/data/addres";

@Component({
    // moduleId: module.id,
    selector: 'addres',
    templateUrl: './addres.component.html',
    styleUrls: ['./addres.component.css']
})
export class AddresComponent implements OnInit {
    public address: Addres[] = [];
    public errorMessage: string = '';

    @Input()
    addressArr: string[];
    // @Output() addressEvent : EventEmitter = new EventEmitter();



    constructor(private addresService: AddresService) {
        console.log(this.addressArr);

    }

    ngOnInit() {
        console.log(this.addressArr);

        // for (let i = 0; i < this.addressArr.length; i++) {

            this.addresService.getAddres(this.addressArr).subscribe(
                data => {
                    this.addressArr = data;
                    console.log(this.addressArr);
                },error => this.errorMessage = error

    );

        // }
    }

}
