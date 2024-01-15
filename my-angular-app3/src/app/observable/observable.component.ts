import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { NgIfContext } from '@angular/common';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent {
  
   myObservable = new Observable(observer => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
  });
  
ngOnit(){

  this.myObservable.subscribe((val)=>{console.log(val);})
}}