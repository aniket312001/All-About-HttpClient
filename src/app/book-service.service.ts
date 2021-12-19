import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Books } from './books';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  bookUrl = '../assets/data.json'

  constructor(private http: HttpClient) { }

  getBooksFromStore():Observable < Books[] >{
    return this.http.get<Books[]>(this.bookUrl)
  }
}
