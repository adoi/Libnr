import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksListComponent } from './components/books/books-list/books-list.component';
import { BookDetailsComponent } from './components/books/book-details/book-details.component';
import { AddBookComponent } from './components/books/add-book/add-book.component';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatMenuModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MatInputModule,
  MatExpansionModule,
  MatIconModule
} from '@angular/material';

import { BookState } from './state/book.state';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BookDetailsComponent,
    AddBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatExpansionModule,
    MatIconModule,
    NgxsModule.forRoot([
      BookState
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
