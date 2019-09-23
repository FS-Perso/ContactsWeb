import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  infos = {
    name: 'Fedi-about',
    email: 'fedi-about@gmail.com'
  };

  constructor() { }

  ngOnInit() {
  }

}
