import { Component } from '@angular/core';
import { BookServiceService } from './book-service.service';
import { Books } from './books';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'all-About-HttpClient';
  allBooks !: Books[]
  allUser !:any[]
  constructor(private service:BookServiceService,private service2:UserService){}

ngOnInit(){
  this.getSoftBooks()
  this.getUser()
}

getSoftBooks(){
  this.service.getBooksFromStore().subscribe(books=>this.allBooks=books)
}

getUser(){
  this.service2.getAllUser().subscribe(user=>this.allUser=user)
}

}
