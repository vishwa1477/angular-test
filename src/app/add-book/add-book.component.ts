import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
btitle:string;
ntitle:string;
statusStud:boolean=false;
statusCourse:boolean=false;
books;
stud;
  constructor(private bs:BookService) { }
 
  ngOnInit(): void {
    this.books = this.bs.getbooks();
    this.stud = this.bs.getbStud();
  }
AddBook()
{
  this.statusCourse = this.bs.addbook({booktitle:this.btitle})
  this.btitle="";
  this.ngOnInit();
}
AddStud()
{
  this.statusStud = this.bs.addStud({studtitle:this.ntitle})
  this.ntitle="";
  this.ngOnInit();
}
}
