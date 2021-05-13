import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../../service/book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {
  bookForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    author: new FormControl(),
    description: new FormControl()
  });
  id: number = -1;

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
    this.bookForm = new FormGroup({
      id: new FormControl(book.id),
      name: new FormControl(book.name),
      author: new FormControl(book.author),
      description: new FormControl(book.description)
    })
  })
  }

  updateBook(id: number) {
    let thisBook = this.bookForm.value;
    this.bookService.updateBook(thisBook, id).subscribe(() => {
      alert("UPDATED SUCCESSFULLY !!!")
    }, error => {
      alert(error)
    })
  }
}
