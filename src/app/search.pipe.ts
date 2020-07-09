import { Pipe, PipeTransform } from '@angular/core';
import { BooksModel } from "./booksModel";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
