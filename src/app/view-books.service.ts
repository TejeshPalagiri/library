import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BooksModel } from "./booksModel";
import { ViewBooksComponent } from './view-books/view-books.component'
import { AddBookComponent } from "./add-book/add-book.component"

@Injectable({
  providedIn: 'root'
})
export class ViewBooksService {

  public msg ="";
  private api_url = "http://localhost:3000/api/library";
  constructor(private httpClient: HttpClient) { }

  getBooks():Observable<BooksModel[]>{
    console.log(this.httpClient.get<BooksModel[]>(this.api_url));
    return this.httpClient.get<BooksModel[]>(this.api_url);
  }

  deleteBook(book_id:any){
    let endpoints = "/delete/" +book_id;
    this.httpClient.delete(this.api_url + endpoints).subscribe(data => {
      console.log(data);
    });
  }
  editBook(book_id, book_title, book_description){
    let updatedBook = {
      book_title: book_title,
      book_description: book_description
    }
    let endpoint = "/updatebook/" +book_id;
    this.httpClient.put(this.api_url+endpoint, updatedBook).subscribe(data =>{
      console.log("Updated Successfully");
    });
  }

  addBook(bookTitle, bookDescription){
    if(bookTitle === "")
    {
      console.log("Empty title");
    }
    if(bookDescription === "")
    {
      console.log("Empty description");
    }

    if(bookTitle !== "" && bookDescription !== ""){
      // console.log(bookTitle+":"+bookDescription);
      let newBook: BooksModel = {
        book_title: bookTitle,
        book_description: bookDescription
      };
      bookTitle="";
      bookDescription="";
      this.httpClient.post(this.api_url, newBook).subscribe(data => {
        console.log(data);
      });
      this.msg = "Book added successfully";
    }
  }
  
}
