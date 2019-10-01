import { Component, OnInit } from '@angular/core';
import { Contact } from './../../model/model.contact';
import { ContactsService } from './../../services/contacts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {

  mode: number = 1;
  contact: Contact = new Contact();
  idContact: number;

  constructor(public contactService: ContactsService, public activatedRoute: ActivatedRoute, public router: Router) {
    this.idContact = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.contactService.getContact(this.idContact)
      .subscribe((data: any) => {
        this.contact = data;
      }, err => {
        console.log(JSON.parse(err.body).message);
      })
  }

  onUpdateContact(id) {
    this.contactService.updateContact(this.contact)
      .subscribe(data => {
        alert("update success");
        this.mode = 2;
      }, err => {
        console.log(JSON.parse(err.body).message);
      })
  }

  onGoToContacts() {
    this.router.navigate(['/contacts']);
  }

}
