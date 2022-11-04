import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {first, Subject} from "rxjs";
import {IAccount} from "../interfaces/IAccount";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  $loggedIn = new Subject<boolean>()
  $creatingAccount = new Subject<boolean>()
  $account = new Subject<IAccount>()

  private loggedIn: boolean = false;
  private creatingAccount: boolean = false;
  private account!: IAccount;


  constructor(public http: HttpService) { }

  onCreateAccount(){
    this.creatingAccount = !this.creatingAccount;
    this.$creatingAccount.next(this.creatingAccount);
  }

  onLoginAccount(){
    this.loggedIn = !this.loggedIn;
    this.$loggedIn.next(this.loggedIn);
  }

  sendAccount(){
    this.$account.next(this.account);
  }

  createAccount(username: string, password: string){
    this.http.createAccount(username,password).pipe(first()).subscribe({
      next: (account) => {
        console.log(account);
        this.account = account
        this.$account.next(this.account);
        this.onCreateAccount();
        this.onLoginAccount()

      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  loginAccount(username: string, password: string){
    this.http.loginAccount(username, password).pipe(first()).subscribe({
      next: (account) => {
        console.log(account);
        this.account = account
        this.$account.next(this.account);
        this.onLoginAccount();
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
