import { Component } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { Category } from '../../lib/service/data/category';
import * as _ from "lodash";

@Component({
    selector: 'app-home1',
    templateUrl: './home1.component.html',
    styleUrls: ['./home1.component.scss'],
    animations:[
        trigger('fade', [
            state('shown' , style({ opacity: 1 })),
            state('hidden', style({ opacity: 0 })),
            transition('* => *', animate('.5s'))
        ]),
    ]
})
export class Home1Component {
    private objectNavigation = {};
    public categories: Category[] = [];
    private init: boolean = false;
    private homeState: boolean = false;
    private loadingState: boolean = true;
    private navigateRoute = 'shop/product';
    constructor(
        private router: Router
    ){}

    // Detail Product
    detailProduct(e){
        let product = _.kebabCase(e.slug);
        this.router.navigate(['shop/p/' + product]);
    }
}
