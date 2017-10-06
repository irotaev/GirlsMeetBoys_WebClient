import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {SimplyComponentKitModule, RegistrationModule} from './Angular2_SimplyComponentKit/module';

import {AppComponent} from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RegistrationModule,
        SimplyComponentKitModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
