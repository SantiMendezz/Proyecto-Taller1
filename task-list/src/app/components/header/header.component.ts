import { Component, OnInit, Input, Output } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string = "Task list";

  constructor() {}

  ngOnInit() {}

  toggleAddTask() {
    console.log("toggleAddTask!");
  }
}
