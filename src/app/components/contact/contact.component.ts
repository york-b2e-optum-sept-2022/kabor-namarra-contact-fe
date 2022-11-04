import { Component, OnInit, Input} from '@angular/core';
import {IContact} from "../../interfaces/IContact";
import {ContactService} from "../../services/contact.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() contact!: IContact;

  check: boolean = false;

  constructor(public contactService: ContactService) { }

  ngOnInit(): void {
  }

  onDeleteClick(){
    this.contactService.onDeleteContact(this.contact);
  }

  onCheckDelete(){
    this.check = !this.check;
  }

}
