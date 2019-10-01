import { Component, OnInit } from '@angular/core';
import { Contact } from './../../model/model.contact';
import { ContactsService } from './../../services/contacts.service';

@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrls: ['./nouveau-contact.component.scss']
})
export class NouveauContactComponent implements OnInit {

  mode: number = 1;
  contact: Contact = new Contact();
  photo: string;
  ph: string;

  constructor(public contactService: ContactsService) { }

  ngOnInit() {
  }

  showPreviewImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.photo = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  onSaveContact(dataForm) {
    this.contactService.saveContact(dataForm)
      .subscribe((data: any) => {
        this.contact = data;
        this.mode = 2;
      }, err => {
        console.log(JSON.parse(err.body).message);
      })
  }

}
