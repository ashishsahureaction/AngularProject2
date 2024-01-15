import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  inputs:['Pdata']
  
})
export class ChildComponent {
  Pdata:any;
@Input() Cdata:string;
constructor(){
  this.Cdata=''
}
}
