import { Component, OnInit } from '@angular/core';
import { Contact } from './../../model/model.contact';
import { ContactsService } from './../../services/contacts.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent implements OnInit {

  contact: Contact = new Contact();
  mode: number = 1;

  constructor(public contactService: ContactsService) {

  }

  ngOnInit() {
  }

  saveContact() {
    this.contactService.saveContact(this.contact)
      .subscribe((data: any) => {
        console.log(data);
        this.contact.id = data.id;
        this.mode = 2;
      }, err => {
        console.log(err);
      })
  }

}
