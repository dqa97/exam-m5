import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {

  book: Book = {};
  id = -1;

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = +paramMap.get("id");
      this.id = id;
      this.getBookById(id);
    })
  }

  ngOnInit() {
  }

  getBookById(id: number) {
    this.bookService.getBookById(id).subscribe(book => {
      this.book = book;
    })
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id).subscribe(() => {
      alert("DELETED SUCCESSFULLY !!!")
    }, error => {
      alert("FAILED !!!")
      }
      )
  }
}
