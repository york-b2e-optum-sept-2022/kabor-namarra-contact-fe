import {IAccount} from "./IAccount";

export interface IContact{
  id?: number,
  owner: IAccount,
  firstname: string,
  lastname: string,
  phoneNumber: string,
  favorite: boolean
}
