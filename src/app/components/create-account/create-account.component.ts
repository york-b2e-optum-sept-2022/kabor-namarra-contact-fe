import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  username: string = "";
  password: string = "";

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
  }

  onCreateClick(){
    this.accountService.createAccount(this.username,this.password);
  }

  onCancelClick(){
    this.accountService.onCreateAccount();
  }

}
