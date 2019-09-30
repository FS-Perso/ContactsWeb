import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { ContactsService } from './../../services/contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})

export class ContactsComponent implements OnInit {

  pageContacts: any;
  motCle: string = "";
  currentPage: number = 0;
  size: number = 5;

  pages: Array<number>;

  constructor(private http: HttpClient, public contactService: ContactsService, public router: Router) { }

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
    this.contactService.getContacts(this.motCle, this.currentPage, this.size)
      .subscribe(data => {
        this.pageContacts = data;
        this.pages = new Array(this.pageContacts.totalPages)
      }, err => {
        console.log(err);
      })
  }

  chercher() {
    console.log("****** chercher *******");
    this.doSearch();
  }

  goToPage(i: number) {
    this.currentPage = i;
    this.doSearch();
  }

  onEditContact(id: number) {
    this.router.navigate(['/editContact', id]);
  }

}
