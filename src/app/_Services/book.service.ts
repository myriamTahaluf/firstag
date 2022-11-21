import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';import { LoginService } from './login.service';
@Injectable({
  providedIn: 'root'
})
export class BookService {
token:any;
constructor(private http:HttpClient ,private router:Router, private login:LoginService){}

getLibList()
{

  this.token = JSON.parse(localStorage.getItem('token') || '{}') ;
    const headers = new HttpHeaders().set('Authorization', 'Bearer '+this.token.responseBody);

  return this.http.get<any>('http://localhost:5109/Book/GetLibList',{headers:headers})
}

add_book(model:any)
{
  const headers = new HttpHeaders().set('Authorization', 'Bearer '+this.token.responseBody);

  return  this.http.post<any>('http://localhost:5109/Book/Add_Book',model,{headers:headers})
  
}
Getbook(id:any)
{
  const headers = new HttpHeaders().set('Authorization', 'Bearer '+this.token.responseBody);
  let body = {'id':id}

  return  this.http.get<any>('http://localhost:5109/Book/getBook/',{headers:headers,params:body})
  
}
editBook(modelEdit:any)
{
  debugger;

  const headers = new HttpHeaders().set('Authorization', 'Bearer '+this.token.responseBody);

  return  this.http.post<any>('http://localhost:5109/Book/Edit_Book',modelEdit,{headers:headers})
}
}
