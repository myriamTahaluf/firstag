import { Component, OnInit } from '@angular/core';
import { HomeService } from '../_Services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
books :any;
ItemCount:number; 
PageCount:number=1;
CurrentPage:number =1
index:number=1; 
size:number=4

  constructor(private booService: HomeService) { }

  ngOnInit() {
    this.getBook(this.index,this.size);
  }

  onTableDataChange(event:any)
  {
    this.getBook(event,this.size)
    }

getBook(index:number,size:number)
{
  
  this.booService.GetBookList(index,size).subscribe(res=>
    {        
      
     
              if(res.isSuccess)
              {    
                this.books=res.responseBody.list;
              
                this.ItemCount= res.responseBody.total;
                this.PageCount= res.responseBody.pagesCount;

              }else{
                alert('True')

              }
     
        })
      }

}

