import { Component, OnInit } from '@angular/core';
import { Router,ParamMap, ActivatedRoute  } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {
  user:any
  constructor(private service : UserService,private route: ActivatedRoute) { }

  showUser(num:number){
      this.service.getUser(num).subscribe(data=>{
      this.user = data
    })
  }

  myid :any
  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {  // getting parameter value 
      this.myid = Number(paramMap.get('id'));
    this.showUser(this.myid)
      
  })
  }

}
