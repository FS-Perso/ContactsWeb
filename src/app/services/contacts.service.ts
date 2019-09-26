import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable()
export class ContactsService {

  constructor(public http: HttpClient) { }

  getContacts(motCle: string, page: number, size: number) {
    return this.http.get("http://localhost:8080/findContacts?mc=" + motCle + "&size=" + size + "&page=" + page)
      .pipe(map(resp => resp));
  }

  getAllContacts() {
    return this.http.get("http://localhost:8080/contacts")
      .pipe(map(resp => resp));
  }

}
