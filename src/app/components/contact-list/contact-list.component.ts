import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../services/account.service";
import {IContact} from "../../interfaces/IContact";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts!: IContact[];

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
  }

  onExitClick(){
    this.accountService.onLoginAccount();
  }

}
