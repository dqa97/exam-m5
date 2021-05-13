import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  book: Book = {};

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  addBook(form: NgForm) {
    let newBook = form.value;
    this.bookService.createBook(newBook).subscribe(() => {
      alert("CREATED SUCCESSFULLY !!!");
      this.book = {}
    }, error => {
      alert("FAILED !!!")
      }
    )
  }

}
