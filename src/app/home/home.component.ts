import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { lessons } from "./lessons-data";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  lessons: any;
  tests: any[];

  constructor() {
  }

  ngOnInit(): void {
    this.lessons = lessons;
    this.tests = ['one','two','three'];
    console.log('lessons', this.lessons);
    console.log('tests', this.tests);
  }

}
