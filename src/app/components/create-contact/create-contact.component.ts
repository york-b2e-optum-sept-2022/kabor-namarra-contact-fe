import { Component, OnInit } from '@angular/core';
import {IContact} from "../../interfaces/IContact";
import {HttpService} from "../../services/http.service";
import {AccountService} from "../../services/account.service";
import {IAccount} from "../../interfaces/IAccount";
import {ContactService} from "../../services/contact.service";

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {

  contact: IContact = {firstname: "", lastname: "", phoneNumber: "", favorite: false}

  account!: IAccount;

  constructor( public accountService: AccountService, public contactService: ContactService) {
    this.accountService.$account.subscribe(account => {
      this.contact.owner = account;
    })
  }

  ngOnInit(): void {
    this.accountService.sendAccount();
  }

  favorite(){
    this.contact.favorite = !this.contact.favorite;
  }

  onCancelClick(){
    this.contactService.onCreatingContact();
  }

  onSubmitClick(){
    // console.log(this.contact.owner?.id)
    this.contactService.onCreateContact(this.contact);
  }

}
