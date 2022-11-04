import { Component } from '@angular/core';
import {AccountService} from "./services/account.service";
import {ContactService} from "./services/contact.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loggedIn: boolean = false;
  creatingAccount: boolean = false;
  creatingContact: boolean = false;

  constructor(public accountService: AccountService, public contactService: ContactService) {
    this.accountService.$loggedIn.subscribe(logged=>{
      this.loggedIn = logged;
    })
    this.accountService.$creatingAccount.subscribe(creating=>{
      this.creatingAccount = creating;
    })
    this.contactService.$creatingContact.subscribe( creating =>{
      this.creatingContact = creating;
    })
  }

  title = 'contacts-fe';
}
