import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'directive';employees=[];data=5;
  constructor(){
  this.employees=[
    { id:1,name:"john",gender:"male"},
    { id:2,name:"joice",gender:"female"}
  ];

  }
  }

