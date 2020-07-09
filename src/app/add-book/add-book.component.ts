import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { ViewBooksService } from '../view-books.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BooksModel } from '../booksModel'

@Component({
  selector: 'add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  public bookTitle = new FormControl('');
  public bookDescription = new FormControl('') ;
  showMessage:boolean = false;
  isClicked = false;
  name;
  
  constructor(
    private viewBooksService: ViewBooksService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
  }

  addBook(bookTitle, bookDescription){
    this.isClicked= true;
    if(bookTitle.value !== '' && bookDescription.value !== ''){
      this.showMessage = true;
      this.viewBooksService.addBook(bookTitle.value, bookDescription.value);
    }else{
      this.showMessage = false;
    }
    
  }

}
