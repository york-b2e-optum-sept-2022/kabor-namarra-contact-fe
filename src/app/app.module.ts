import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { LoginComponent } from './components/login/login.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactComponent } from './components/contact/contact.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { CreateContactComponent } from './components/create-contact/create-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    LoginComponent,
    ContactListComponent,
    ContactComponent,
    CreateContactComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
