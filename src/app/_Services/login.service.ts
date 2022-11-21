import { Injectable } from '@angular/core';
import {Router} from '@angular/router'
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { token } from '../_Model/token';
import { ReplaySubject } from 'rxjs';
import { Token } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userData:any ; 
  loginForm: any;
  result:any;
  is_success:boolean;
 
  private currentUsserSource= new  ReplaySubject<token>(1);
  currentUser$=this.currentUsserSource.asObservable();
 
  constructor(private http:HttpClient ,private router:Router){}
  Login(model :any)
  {
    
    const headers = new HttpHeaders().set('Content-Type', 'application/json;');
  
    return  this.http.post<any>('http://localhost:5109/User/Login',model,{headers:headers}).pipe(
    map((res:token)=>{
      const user=res;
      if(user)
      {
        localStorage.setItem('token',JSON.stringify(user));
         this.currentUsserSource.next(user);
      }})
    )
  }
setCurentUser(user:token)
{
  this.currentUsserSource.next(user);
}
  logout(){
    localStorage.removeItem('token');
    this.currentUsserSource.next(null!);

}
}
