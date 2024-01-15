import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app3';
  parrentdata= "Prarrent to child data transfer";
  constructor(){
    this.parrentdata=''
  };
}
