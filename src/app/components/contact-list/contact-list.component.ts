import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../services/account.service";
import {IContact} from "../../interfaces/IContact";
import {ContactService} from "../../services/contact.service";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts!: IContact[];

  constructor(public accountService: AccountService, public contactService: ContactService) {
    this.contactService.$contactList.subscribe(contactList=>{
      this.contacts = contactList;
    })
  }

  ngOnInit(): void {
    this.contactService.getContacts();
  }

  onExitClick(){
    this.accountService.onLoginAccount();
  }

  onCreateClick(){
    this.contactService.onCreatingContact();
  }

}
