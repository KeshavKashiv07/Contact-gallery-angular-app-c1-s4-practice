import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit {
  contact: Contact = {};
    @Output()
    contactAdded: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  addContact() {
    this.contactAdded.emit(this.contact);
  }

}
