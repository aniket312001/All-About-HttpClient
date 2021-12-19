import { Component, OnInit } from '@angular/core';
import { Observable,pipe  } from 'rxjs';
import { UserService } from '../user.service';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private service : UserService) { }
  name !:Observable<string>
  
  showUser(num:number){
    this.name = this.service.getUser(num).pipe(map(data =>data.name))  // map function 
    console.log(this.name)
  }

  ngOnInit(): void {
    this.showUser(3)
  }

}
