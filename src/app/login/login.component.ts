import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.callAPI() 
  }

  callAPI(){
    const url = 'https://jsonplaceholder.typicode.com/posts';
    this.http.get(url, { observe: 'body' })
    .subscribe(
      res => {
        //setTimeout(()=>{ console.log(res)  }, 2000);
        console.log(res)
      },
      err => {
        console.log(err)
      }
    )
  }

}
