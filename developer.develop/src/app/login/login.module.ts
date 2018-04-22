import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressBarModule} from '@angular/material/progress-bar';

// Dependencies
import {
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatSliderModule,
    MatTabsModule,
    MatInputModule,
    MatSnackBarModule,
    MatCardModule,
    // MatFormFieldModule
} from '@angular/material';
import 'hammerjs';
import {CustomFormsModule} from 'ng2-validation';

// import {libModule} from '../lib/lib.module';
import {UserService} from '../lib/service/user.service';

import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {LogoutComponent} from './logout/logout.component';
import {UserPageComponent} from './user-page/user-page.component';
import {ForgotPassComponent} from './forgot-pass/forgot-pass.component';
import {CurrentUserComponent} from './current-user/current-user.component';
import {InputMatCustomComponent} from './input-mat-custom/input-mat-custom.component';
import {ShopModule} from '../shop/shop.module';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        ShopModule,
        BrowserAnimationsModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatButtonModule,
        MatCheckboxModule,
        MatChipsModule,
        MatSliderModule,
        MatTabsModule,
        MatInputModule,
        MatCardModule,
        MatFormFieldModule,
        MatExpansionModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        MatSnackBarModule,
        CustomFormsModule,
        // MatProgressBarModule
    ],
    declarations: [LoginComponent, RegistrationComponent, LogoutComponent, UserPageComponent, ForgotPassComponent, CurrentUserComponent, InputMatCustomComponent],
    providers: [UserService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

    exports: [UserPageComponent],

})
export class LoginModule {
}
