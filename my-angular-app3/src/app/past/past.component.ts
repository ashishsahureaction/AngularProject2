import { Observable } from 'rxjs';
import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-past',
  templateUrl: './past.component.html',
  styleUrls: ['./past.component.css']
})
export class PastComponent {
  
  posts:any;
  constructor(private http:HttpClient){http.get("https://jsonplaceholder.typicode.com/posts").subscribe((response)=>{this.posts=response;});
}
createPost(Input:HTMLInputElement){
  let post:any={title:Input.value};
  Input.value="";

  this.http.post<any>("https://jsonplaceholder.typicode.com/posts", JSON.stringify(post)).
  subscribe((response)=>console.log(response));
  this.posts.splice(0,0,post);};



}



 












