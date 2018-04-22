import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {CommonModule} from '@angular/common';
import {AddresComponent} from './addres/addres.component';
import {AddresService} from '../lib/service/addres.service';
import {MatExpansionModule} from '@angular/material/expansion';
import { libModule } from '../lib/lib.module';
@NgModule({
    imports: [
        CommonModule,
        MatExpansionModule,
        // libModule,
    ],
    declarations: [AddresComponent],
    providers: [AddresService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [AddresComponent]

})
export class ShopModule {
}
