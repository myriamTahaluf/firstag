import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../_Services/book.service';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
model:any=
{
  id:null,
  book_Name:null,
  description:null,
  type:null,
  library_Id:null,

};
lib:any ; 
EditForm :FormGroup
constructor(private http:HttpClient ,private router:ActivatedRoute,
  private bookService:BookService,  private r:Router,
    
  ){}

  ngOnInit() {
    this.bookService.getLibList().subscribe(res=>{
      this.lib=res.responseBody;
    })
    this.router.paramMap.subscribe(pMap=>{
      const id = pMap.get('id');
      this.getBookById(id); 

    })
  }
  getBookById(id:any){
    this.bookService.Getbook(id).subscribe(res=>
      {
        var data = res.responseBody;      
        this.model.id= data.id;   
        this.model.book_Name= data.book_Name;
        this.model.library_Id=data.library_Id
        this.model.type=data.type;
        this.model.description=data.description
      });
  }

  EditBook()
  {

    this.bookService.editBook(this.model).subscribe(res=>{

      if(res.isSuccess)
      {

        this.r.navigate(['Home'])           
      }else{    
            alert("false")
    }
    })
  }

}
