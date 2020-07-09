import { ViewBooksService } from './view-books.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModuleModule } from "./app-routing-module/app-routing-module.module";

import { AppComponent } from './app.component';
import { AddBookComponent } from './add-book/add-book.component';
import { HttpClientModule } from "@angular/common/http";
import { ViewBooksComponent } from './view-books/view-books.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    ViewBooksComponent,
    SearchPipe,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModuleModule,
  ],
  providers: [ViewBooksService, ViewBooksComponent, AddBookComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
