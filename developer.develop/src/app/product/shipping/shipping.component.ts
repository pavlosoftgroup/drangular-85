import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {CookieService} from '../../lib/service/cookie.service';
import {Router} from '@angular/router';
import * as _ from "lodash";

@Component({
    selector: 'app-shipping',
    templateUrl: './shipping.component.html',
    styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {

    public firstname: string;
    public lastname: string;
    public email: string;
    public phone: string;
    public address: string;
    public city: string;
    public time: string;
    public house: string;
    public room: string;
    public state: string;
    public country: string;
    public productsOrder = [];
    public total: number;
    public subTotal: number;
    public promo: string;
    public promoValue: number = 0;
    public nottouched = true;
    public touched = false;
    public hiden = false;

    public times = [
        {value: '9_12', viewValue: '9:00-12:00'},
        {value: '12_15', viewValue: '12:00-15:00'},
        {value: '15_18', viewValue: '15:00-18:00'},
        {value: '18_21', viewValue: '15:00-21:00'},
    ];
    minDate = new Date(2000, 0, 1);
    maxDate = new Date(2020, 0, 1);

    constructor(
        private router: Router,
        private cookie: CookieService,
        public snackBar: MatSnackBar,
    ) {
    }

    ngOnInit() {
        var products = this.cookie['productsOrder'];
        _.map(products, (x) => {
            return x.slug = _.kebabCase(x.slug)
        });
        this.productsOrder = products;
        console.log(this.productsOrder);
        this.promo = JSON.stringify(this.cookie['promo']);
        this.promoValue = this.cookie['promoValue'];
        this.subTotal = this.cookie['subtotal'];
        this.total = this.cookie['subtotal'] - this.promoValue;
        if (this.total < 0) {
            this.total = 0;
        }
        if (this.productsOrder.length == 0) {
            this.router.navigate(['/shop/cart']);
        }
    }

    // Open Popup Checkout
    openCheckout() {
        var handler = (<any>window).StripeCheckout.configure({
            key: 'pk_test_RdW4DTIQXiTLULbUy1vnQUsV',
            locale: 'auto',
            token: (token: any) => {
                // You can access the token ID with `token.id`.
                // Get the token ID to your server-side code for use.
                // Documentation charge https://stripe.com/docs/charges
                console.log(token.id);
                this.cookie.addCookie('payed', 'payed');
                this.cookie.removeCookie('products');
                this.cookie.removeCookie('promo');
                this.cookie.removeCookie('promoValue');
                this.cookie.removeCookie('subtotal');
                setTimeout(() => {
                    this.router.navigate(['/shop/receipt']);
                }, 1000);
            },
            closed: () => {
                this.nottouched = true;
                this.touched = false;
            }
        });

        // handler Open
        handler.open({
            image: '/assets/images/brand/logo-stripe.jpg',
            name: 'Angushop',
            description: 'Complete payment',
            amount: this.total
        });
    }


    // Submit
    onSubmit(form) {
        console.log(form.value); // Object Shipping Object
        console.log(this.cookie['productsOrder']); // Array Obect Products order
        console.log(this.cookie['promo']); // Object Promo
        console.log(this.cookie['promoValue']); // Object Promo Value From calculation
        console.log(this.cookie['subtotal']); // Object Sub Total

        // this.openCheckout();

        this.nottouched = false;
        this.touched = true;
        setTimeout(() => {
            this.router.navigate(['/shop/receipt']);
        }, 1000);
    }
}
