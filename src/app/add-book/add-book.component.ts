import { Component, OnInit } from '@angular/core';
import { BookService } from '../_Services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  model:any={};
  lib:any=[]

  constructor(private bookService:BookService) { }


  ngOnInit() {
    this.bookService.getLibList().subscribe(res=>{
      this.lib=res.responseBody;
    })
  }
  addBook()
  {
    this.bookService.add_book(this.model).subscribe(res=>
      {

        if(res.isSuccess)
        {
          alert("Added successfully"); 
        }else
        {

          alert("error")
        }
      })


  }

}
