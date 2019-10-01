import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { ContactsService } from './../../services/contacts.service';
import { Router } from '@angular/router';
import { Contact } from './../../model/model.contact';

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
    this.contactService.getAllContacts()
      .subscribe(data => {
        this.pageContacts = data;
      }, err => {
        console.log(err);
      })
  }

  doSearch() {
    this.contactService.getContacts(this.motCle, this.currentPage, this.size)
      .subscribe(data => {
        this.pageContacts = data;
        this.pages = new Array(this.pageContacts.totalPages);
      }, err => {
        console.log(err);
      })
  }

  chercher() {
    this.doSearch();
  }

  goToPage(i: number) {
    this.currentPage = i;
    this.doSearch();
  }

  onEditContact(id: number) {
    this.router.navigate(['/editContact', id]);
  }

  onDeleteContact(c: Contact) {
    let confirm = window.confirm('Are you sure to delete the contact: ' + c.prenom + ' ' + c.nom);
    if (confirm == true) {
      this.contactService.deleteContact(c.id)
        .subscribe(data => {
          if (this.pageContacts.content == null) {
            this.pageContacts.splice(this.pageContacts.indexOf(c), 1);
          } else {
            this.pageContacts.content.splice(this.pageContacts.content.indexOf(c), 1);
          }
        }, err => {
          console.log(err);
        })
    }
  }
}
