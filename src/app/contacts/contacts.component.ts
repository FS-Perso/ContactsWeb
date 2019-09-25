import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { ContactsService } from './../services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})

export class ContactsComponent implements OnInit {

  pageContacts: any;

  constructor(private http: HttpClient, public contactService: ContactsService) { }

  ngOnInit() {
    this.contactService.getContacts()
      .subscribe(data => {
        this.pageContacts = data;
      }, err => {
        console.log(err);
      })
  }

}
