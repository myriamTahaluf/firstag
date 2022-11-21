import { HttpHeaders,HttpClient, } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {Router} from '@angular/router'
import { LoginService } from './_Services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'firstag';
  userData:any ; 
  loginForm: any;
  result:any;
  is_success:boolean;
  error:string

  
  ngOnInit()
  {

  }
  constructor( private router:Router, public loginService:LoginService)
  { }
  

}
