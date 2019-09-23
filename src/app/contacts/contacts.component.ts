import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contact = { name: "Fedi-contact", email: "fedi-contact@gmail.com" }

  constructor() { }

  ngOnInit() {
  }

}
