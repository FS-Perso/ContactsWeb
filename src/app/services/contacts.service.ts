import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable()
export class ContactsService {

  constructor(public http: HttpClient) { }

  getContacts() {
    return this.http.get("http://localhost:8080/findContacts?mc=a&size=2&page=0")
      .pipe(map(resp => resp));
  }

}
