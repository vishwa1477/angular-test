import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookService } from './book.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
  ],
  imports: [BrowserModule,HttpClientModule,FormsModule,
    RouterModule.forRoot([
      {path:'',component:AddBookComponent},
    ])],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
