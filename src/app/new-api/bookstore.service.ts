import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookstoreService {

  constructor(private http:HttpClient) { 
  
  }
  bookurl = "/api/books"
  getBooksDetails():Observable<any[]>{
    return this.http.get<any[]>(this.bookurl)
    
  }

  createBooksDetails(book:any):Observable<any>{
    let httpHeader = new HttpHeaders().set("Content-Type",'application/Json')
    let options = {headers:httpHeader};
    return this.http.post(this.bookurl,book,options)
  }

  getBookById(id:string){
    return this.http.get<any>(this.bookurl+"/"+id)
  }


  updateBooksDetails(book:any):Observable<any>{
    let httpHeader = new HttpHeaders().set("Content-Type",'application/Json')
    let options = {headers:httpHeader};
    return this.http.put<any>(this.bookurl,book.id,book)
  }


  deleteBooksDetails(bookid:any):Observable<any>{
    let httpHeader = new HttpHeaders().set("Content-Type",'application/Json')
    let options = {headers:httpHeader};
    return this.http.delete<any>(this.bookurl,bookid)
  }
}
