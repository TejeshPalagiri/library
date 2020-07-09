import { ViewBooksComponent } from './../view-books/view-books.component';
import { AddBookComponent } from './../add-book/add-book.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";


const routes :Routes = [
  { path:'viewbook', component: ViewBooksComponent},
  { path:'addbook', component: AddBookComponent },
  { path: '',   redirectTo: '/viewbook', pathMatch: 'full' },
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModuleModule { }
