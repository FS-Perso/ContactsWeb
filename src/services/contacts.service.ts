import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Contact } from './../model/model.contact';

@Injectable()
export class ContactsService {

  constructor(public http: HttpClient) { }

  getContacts(motCle: string, page: number, size: number) {
    return this.http.get("http://localhost:8080/findContacts?mc=" + motCle + "&size=" + size + "&page=" + page)
      .pipe(map(resp => resp));
  }

  getContact(id: number) {
    return this.http.get("http://localhost:8080/contacts/" + id)
      .pipe(map(resp => resp));
  }

  getAllContacts() {
    return this.http.get("http://localhost:8080/contacts")
      .pipe(map(resp => resp));
  }

  saveContact(contact: any) {
    contact.photo = "assets/img/" + contact.photo.substring(12);
    return this.http.post("http://localhost:8080/contacts", contact)
      .pipe(map(resp => resp));
  }

  updateContact(contact: any) {
    return this.http.put("http://localhost:8080/contacts/" + contact.id, contact)
      .pipe(map(resp => resp));
  }

  deleteContact(id: number) {
    return this.http.delete("http://localhost:8080/contacts/" + id)
      .pipe(map(resp => resp));
  }
}
