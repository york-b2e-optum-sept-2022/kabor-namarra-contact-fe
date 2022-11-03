import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IAccount} from "../interfaces/IAccount";

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
}
