import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from './book/book-list/book-list.component';
import {BookCreateComponent} from './book/book-create/book-create.component';
import {BookDeleteComponent} from './book/book-delete/book-delete.component';
import {BookDetailComponent} from './book/book-detail/book-detail.component';
import {BookUpdateComponent} from './book/book-update/book-update.component';


const routes: Routes = [
  {
    path: 'books',
    component: BookListComponent
  },
  {
    path: 'books/create',
    component: BookCreateComponent
  },
  {
    path: 'books/update/:id',
    component: BookUpdateComponent
  },
  {
    path: 'books/delete/:id',
    component: BookDeleteComponent
  },
  {
    path: 'books/detail/:id',
    component: BookDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
