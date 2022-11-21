import { HttpHeaders,HttpClient, } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {Router} from '@angular/router'
import { token } from '../_Model/token';
import { LoginService } from '../_Services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model:any={}
  userData:any ; 
  loginForm: any;
  result:any;
  is_success:boolean;
  error:string; 
  LoggedIn:boolean=true; 
  constructor(public fb: FormBuilder,private http:HttpClient ,private router:Router, private loginService:LoginService )
  { }
  ngOnInit(){}
  
  login()
  {
    this.is_success=true; 
    this.error=''; 
    this.loginService.Login(this.model).subscribe(res=>
      {        
        const user:token=JSON.parse(localStorage.getItem('token')||'{}'); 
                if(user.isSuccess)
                {    
                  this.router.navigate(['Home'])           
                
                }else{
                  this.is_success=false; 
                  this.error="wrong email or password";}
       
          })
        }
}