import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// Home
import {Home1Component} from './home/home1/home1.component';
//import { Home2Component } from './home/home2/home2.component';

// Products
import {DashboardProdut} from './product/dashboard/dashboard.component';
import {DetailProductComponent} from './product/detail-product/detail-product.component';
//import { product1Component } from './product/product1/product1.component';
import {Product2Component} from './product/product2/product2.component';
//import { Product3Component } from './product/product3/product3.component';
//import { Product4Component } from './product/product4/product4.component';
//import { Product5Component } from './product/product5/product5.component';
import {CartComponent} from './product/cart/cart.component';
import {ShippingComponent} from './product/shipping/shipping.component';
import {ReceiptComponent} from './product/receipt/receipt.component';
import {WishlistComponent} from './product/wishlist/wishlist.component';
//import { CompareComponent } from './product/compare/compare.component';

import {NotFoundComponent} from './not-found/not-found.component';
import {ContactComponent} from './contact/contact.component';

// ELements
import {DashboardELementComponent} from './element/dashboard-element/dashboard-element.component';
import {ProductElement} from './element/product/product.component';
import {FormControlComponent} from './element/form-control/form-control.component';
import {LayoutComponent} from './element/layout/layout.component';
import {ButtonComponent} from './element/button/button.component';
import {GridComponent} from './element/grid/grid.component';
import {TyphographyComponent} from './element/typhography/typhography.component';
import {HelperComponent} from './element/helper/helper.component';
import {PaymentAndDeliveryComponent} from './page/payment-and-delivery/payment-and-delivery.component';
import {OrderStatusComponent} from "./page/order-status/order-status.component";
import {ReturnOfGoodsComponent} from "./page/return-of-goods/return-of-goods.component";
import {HelpIsNeededComponent} from "./page/help-is-needed/help-is-needed.component";

// User
import {UserPageComponent} from "./login/user-page/user-page.component";
import {LoginComponent} from "./login/login/login.component";
import {LogoutComponent} from "./login/logout/logout.component";
import {RegistrationComponent} from "./login/registration/registration.component";
import {ForgotPassComponent} from "./login/forgot-pass/forgot-pass.component";
import {CurrentUserComponent} from "./login/current-user/current-user.component";
import {User} from "./lib/service/data/user";
import {AddresComponent} from "./shop/addres/addres.component";


const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: Home1Component},

    {
        path: 'shop', component: DashboardProdut,
        children: [
            //{ path: '', redirectTo: '/shop/product1', pathMatch: 'full'  },
            // { path: 'product1', component: product1Component },
            {path: 'product', component: Product2Component},
            //{ path: 'product3', component: Product3Component },
            // { path: 'product4', component: Product4Component },
            // { path: 'product5', component: Product5Component },
            {path: 'cart', component: CartComponent},
            {path: 'shipping', component: ShippingComponent},
            {path: 'receipt', component: ReceiptComponent},
            {path: 'wishlist', component: WishlistComponent},
            //{ path: 'compare',  component: CompareComponent },
            {path: 'p/:detail', component: DetailProductComponent}
        ]
    },
    {
        path: 'element', component: DashboardELementComponent,
        children: [
            {path: '', redirectTo: '/element/product', pathMatch: 'full'},
            {path: 'product', component: ProductElement},
            {path: 'form', component: FormControlComponent},
            {path: 'layout', component: LayoutComponent},
            {path: 'button', component: ButtonComponent},
            {path: 'grid', component: GridComponent},
            {path: 'typography', component: TyphographyComponent},
            {path: 'helper', component: HelperComponent},
        ]

    },

    {
        path: 'page', component: DashboardProdut,
        children: [
            {path: 'payment-and-delivery', component: PaymentAndDeliveryComponent},
            {path: 'order-status', component: OrderStatusComponent},
            {path: 'return-of-goods', component: ReturnOfGoodsComponent},
            {path: 'help-is-needed', component: HelpIsNeededComponent},

        ]
    },
    {
        path: 'user', component: UserPageComponent,
        children: [
            {path: 'login', component: LoginComponent},
            {path: 'logout', component: LogoutComponent},
            {path: 'sign-up', component: RegistrationComponent},
            {path: 'forgot', component: ForgotPassComponent},
            {path: 'current/:id', component: CurrentUserComponent},
            // {path: 'current', component: CurrentUserComponent},

        ]
    },
    {path: 'address',component: AddresComponent},
    {path: 'contact', component: ContactComponent},
    {path: '404', component: NotFoundComponent},
    {path: '**', redirectTo: '404'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
