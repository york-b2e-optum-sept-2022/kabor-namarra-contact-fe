import { Component } from '@angular/core';
import {AccountService} from "./services/account.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loggedIn: boolean = false;
  creatingAccount: boolean = false;

  constructor(public accountService: AccountService) {
    this.accountService.$loggedIn.subscribe(logged=>{
      this.loggedIn = logged;
    })
    this.accountService.$creatingAccount.subscribe(creating=>{
      this.creatingAccount = creating;
    })
  }

  title = 'contacts-fe';
}
