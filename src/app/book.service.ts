import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
books=[{}];
name=[{}];

  constructor() { }

  getbooks()
  {
    return this.books;
  }
  addbook(b):boolean
  {
    this.books.push(b);
    return true
  }
  getbStud()
  {
    return this.name;
  }
  addStud(b):boolean
  {
    this.name.push(b);
    return true
  }
}
