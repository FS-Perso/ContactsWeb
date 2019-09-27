import { Component, OnInit } from '@angular/core';
import { Contact } from './../../model/model.contact';
import { ContactsService } from './../../services/contacts.service';

@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrls: ['./nouveau-contact.component.scss']
})
export class NouveauContactComponent implements OnInit {

  mode: number = 1;
  contact: Contact = new Contact();

  constructor(public contactService: ContactsService) { }

  ngOnInit() {
  }

  onSaveContact(dataForm) {
    this.contactService.saveContact(dataForm)
      .subscribe((data: any) => {
        console.log(data);
        this.contact = data;
        this.mode = 2;
      }, err => {
        console.log(JSON.parse(err.body).message);
      })
  }
  
}
