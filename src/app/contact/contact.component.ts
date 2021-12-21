import { Component, OnInit } from '@angular/core';
import { lessons } from "../home/lessons-data";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  lessons: any;

  constructor() {
  }

  ngOnInit(): void {
    this.lessons = lessons;
  }

}
