import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ILesson, lessons } from "./lessons-data";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  lessons: ILesson[];

  constructor() {
  }

  ngOnInit(): void {
    this.lessons = lessons;
  }

}
