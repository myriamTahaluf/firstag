import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
token:any; 

  constructor(private http:HttpClient ,private router:Router){}

  GetBookList(index:number,size:number)
  {
    this.token = JSON.parse(localStorage.getItem('token') || '{}') ;
    const headers = new HttpHeaders().set('Authorization', 'Bearer '+this.token.responseBody);
   let body = {'index':index, 'size':size}

  return this.http.get<any>('http://localhost:5109/Book/GetBookList',{headers:headers,params:body})
  }
}

