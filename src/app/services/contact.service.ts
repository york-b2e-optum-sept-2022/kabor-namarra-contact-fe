import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {AccountService} from "./account.service";
import {IAccount} from "../interfaces/IAccount";
import {first, Subject} from "rxjs";
import {IContact} from "../interfaces/IContact";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private account: IAccount | null = null;


  $creatingContact = new Subject<boolean>()
  $contactList = new Subject<IContact[]>()

  private creatingContact: boolean = false;


  onCreatingContact(){
    this.creatingContact = !this.creatingContact;
    this.$creatingContact.next(this.creatingContact);
  }

  constructor(public http: HttpService, public accountService: AccountService) {
    this.accountService.$account.subscribe(account => {
      this.account = account;
      this.getContacts()
    })
  }

  getContacts(){
    if(this.account?.id) {
      this.http.getContacts(this.account?.id).pipe(first()).subscribe({
        next: (contacts) => {
          this.$contactList.next(contacts)
        },
        error: (err) => {
          console.error(err);
        }
      })
    }
  }

  onCreateContact(contact: IContact){


      this.http.createContact(contact).pipe(first()).subscribe({
        next: (contact) => {
          console.log(contact);
          this.onCreatingContact();
        },
        error: (err) => {
          console.error(err);
        }
      })

  }

  onDeleteContact(contact: IContact){
    this.http.deleteContact(contact).subscribe({
      next: (contact) => {
        console.log(contact);
        this.getContacts()
      },
      error: (err) => {
        console.error(err);
      }
    });
  }



}
