import { AddBookComponent } from './../add-book/add-book.component';
import { Component, OnInit } from '@angular/core';
import { ViewBooksService } from '../view-books.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl,NgControl } from "@angular/forms";

@Component({
  selector: 'view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {

  public library_books = [];
  public filtered_books = [];
  public searchBook:string;
  book_id:any;
  book_title: any;
  book_description: any;
  name;
  public bookTitle = new FormControl('');
  public bookDescription = new FormControl('') ;
  public bookId = new FormControl('');
  isClicked = false;
  showMessage = false;
  constructor(private viewBooksService: ViewBooksService, 
    private addBookComponent: AddBookComponent,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
    this.viewBooksService.getBooks()
    .subscribe(data =>{
      this.library_books = data;
      console.log(data);
    });

    
  }

  deleteBook(x){
    this.viewBooksService.deleteBook(x);
    this.library_books = this.library_books.filter(book => book._id !== x);
  }

  editBook(book){
    this.bookId.setValue(book._id);
    this.bookTitle.setValue(book.book_title);
    this.bookDescription.setValue(book.book_description);
    
  }

  updateBook(bookId, bookTitle, bookDescription){
    this.isClicked = true;
    if(bookId.value !== ""){
      if(bookTitle.value !== "" && bookDescription !== "" ){
        this.showMessage = true;
        this.viewBooksService.editBook(bookId.value, bookTitle.value, bookDescription.value);
        this.ngOnInit();
      }
      
    }
    else{
      this.showMessage = false;
    }
  }

  search(){
    if(this.searchBook !== "")
    {
      this.library_books = this.library_books.filter(data =>{
        return data.book_title.toLocaleLowerCase().match(this.searchBook.toLocaleLowerCase());
      });
    }
    else{
      this.ngOnInit();
    }
  }

}
