import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IAccount} from "../interfaces/IAccount";
import {IContact} from "../interfaces/IContact";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient) { }

  createAccount(username: string, password: string){
    return this.http.post("http://localhost:8080/api/account", {username:username,password:password})as Observable<IAccount>;
  }

  loginAccount(username: string, password: string){
    return this.http.get(`http://localhost:8080/api/account?username=${username}&password=${password}`)as Observable<IAccount>
  }

  getContacts(accountId: number){
    return this.http.get(`http://localhost:8080/api/contact?accountId=${accountId}`)as Observable<IContact[]>
  }

  createContact(contact: IContact){
    return this.http.post("http://localhost:8080/api/contact", {ownerId: contact.owner?.id,firstname: contact.firstname,lastname: contact.lastname,phoneNumber: contact.phoneNumber,favorite: contact.favorite})as Observable<IContact>
  }

  deleteContact(contact: IContact){
    return this.http.delete(`http://localhost:8080/api/contact?contactId=${contact.id}`)as Observable<IContact>
  }
}

