import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';


// Dependencies
import {MatProgressSpinnerModule, MatIconModule, MatButtonModule, MatMenuModule} from '@angular/material';
import 'hammerjs';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';

// Compoenent
import {AppComponent} from './app.component';
import {SideComponent} from './side/side.component';
import {HomeModule} from './home/home.module';
import {ProductModule} from './product/product.module';
import {NotFoundComponent} from './not-found/not-found.component';
import {contactModule} from './contact/contact.module';
import {ElementModule} from './element/element.module';
import {PageModule} from './page/page.module';
import {LoginModule} from './login/login.module';


// Routing MOdule
import {AppRoutingModule} from './routing.module';

// Directive Height
import {FullscreenDirective} from './lib/directive/fullscreen.directive';
import {MatchHeightDirective} from './lib/directive/match-height.directive';
import {ShopModule} from './shop/shop.module';
import {libModule} from './lib/lib.module';

@NgModule({
    declarations: [
        AppComponent,
        SideComponent,
        NotFoundComponent,
        FullscreenDirective,
        MatchHeightDirective,

    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        ShopModule,
        LoginModule,
        HomeModule,
        ProductModule,
        ElementModule,
        contactModule,
        PageModule,
        libModule,
        AppRoutingModule,
        SlimLoadingBarModule.forRoot()
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
