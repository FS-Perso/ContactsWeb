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
  motCle: string = "";
  page: number = 0;
  size: number = 5;

  constructor(private http: HttpClient, public contactService: ContactsService) { }

  ngOnInit() {
    console.log("+++++++++ ngOnInit ++++++++++++")
    this.contactService.getAllContacts()
      .subscribe(data => {
        this.pageContacts = data;
        console.log(data);
      }, err => {
        console.log(err);
      })
  }

  doSearch() {
    this.contactService.getContacts(this.motCle, this.page, this.size)
      .subscribe(data => {
        this.pageContacts = data;
      }, err => {
        console.log(err);
      })
  }

  chercher() {
    console.log("****** chercher *******");
    this.doSearch();
  }

}
