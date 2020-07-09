import { TestBed, inject } from '@angular/core/testing';

import { ViewBooksService } from './view-books.service';

describe('ViewBooksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewBooksService]
    });
  });

  it('should be created', inject([ViewBooksService], (service: ViewBooksService) => {
    expect(service).toBeTruthy();
  }));
});
