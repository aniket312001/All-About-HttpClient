import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookServiceService } from '../book-service.service';
import { Books } from '../books';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnInit {

  constructor(private service:BookServiceService) { }
  mybooks!:Observable<Books[]>
  ngOnInit(): void {
    this.getbook()
  }

  getbook(){
    this.mybooks = this.service.getBooksFromStore()
  }
}
