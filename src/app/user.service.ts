import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  UserUrl = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http: HttpClient) { }

  getAllUser():Observable < any[] >{
    return this.http.get<any[]>(this.UserUrl)
  }

  getUser(id:number):Observable < any >{
    return this.http.get<any>(this.UserUrl+'/'+id)
  }

 
}
