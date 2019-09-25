import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})

export class ContactsComponent implements OnInit {

  pageContacts: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("http://localhost:8080/findContacts?mc=a&size=2&page=0")
      .pipe(map(resp => resp))
      .subscribe(data => {
        this.pageContacts = data;
      }, err => {
        console.log(err);
      })
  }

}
