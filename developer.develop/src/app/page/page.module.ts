import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaymentAndDeliveryComponent} from './payment-and-delivery/payment-and-delivery.component';
import {OrderStatusComponent} from './order-status/order-status.component';
import { ReturnOfGoodsComponent } from './return-of-goods/return-of-goods.component';
import { HelpIsNeededComponent } from './help-is-needed/help-is-needed.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        PaymentAndDeliveryComponent,
        OrderStatusComponent,
        ReturnOfGoodsComponent,
        HelpIsNeededComponent,
    ]
})
export class PageModule {
}
