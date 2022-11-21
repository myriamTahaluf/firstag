import { Component, OnInit } from '@angular/core';
import { HttpHeaders,HttpClient, } from '@angular/common/http';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {Router} from '@angular/router'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userData:any ; 
  constructor(private http:HttpClient ,private router:Router )
{}
  ngOnInit() {
    this.GetUserDetails(); 

  }
  GetUserDetails()
  {
    this.http.get<any>('http://localhost:5109/User/Get_User_Details',
    {params:{
      id:'9c506e15-00ae-4a50-2e16-08dac7d69e05'
    }
  }).subscribe(res=> {this.userData=res})

  
  }
}
