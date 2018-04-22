import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Vendor
import {
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule
} from '@angular/material';
import {NgxPaginationModule} from 'ngx-pagination';

// Directive
import {libHeightDirective} from './directive/lib-height.directive';

// Service
import {productService} from './service/product.service';
import {UserService} from './service/user.service';
import {OrderService} from './service/order.service';
import {PageService} from './service/page.service';
import {AddresService} from './service/addres.service';

// Pipe
import {productFilterPipe} from './pipe/filter-product';

// Component
import {ProductComponent} from './component/product/product.component';
import {GridLogoComponent} from './component/grid-logo/grid-logo.component';
import {LightboxComponent} from './component/lightbox/lightbox.component';
import {BreadcumbComponent} from './component/breadcumb/breadcumb.component';
import {RatingComponent} from './component/rating/rating.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatProgressSpinnerModule,
        HttpClientModule,
        MatIconModule,
        MatButtonModule,
        NgxPaginationModule,
        RouterModule
    ],
    providers: [
        productService,
        OrderService,
        UserService,
        PageService,
        AddresService,

    ],
    declarations: [
        ProductComponent,
        libHeightDirective,
        GridLogoComponent,
        LightboxComponent,
        productFilterPipe,
        BreadcumbComponent,
        RatingComponent
    ],
    exports: [
        ProductComponent,
        GridLogoComponent,
        BreadcumbComponent,
        RatingComponent
    ]
})
export class libModule {
}
