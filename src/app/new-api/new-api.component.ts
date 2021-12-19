import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookstoreService } from './bookstore.service';

@Component({
  selector: 'app-new-api',
  templateUrl: './new-api.component.html',
  styleUrls: ['./new-api.component.css']
})
export class NewAPIComponent implements OnInit {

  constructor(private service:BookstoreService,private fb : FormBuilder) { }
  alldata:any
  bookForm !: FormGroup

  showBook(){
    this.service.getBooksDetails().subscribe(data=>this.alldata=data)  // to show the data
    // console.log(this.alldata)
  }


  ngOnInit(): void {
   
    this.showBook()

    this.bookForm=this.fb.group({
      id:new FormControl(''), 
      name:new FormControl('',Validators.compose([Validators.required,Validators.maxLength(15),Validators.minLength(1)])),
      category:new FormControl('',[Validators.required,Validators.minLength(3)])
    })
  }
  datasaved= false
  onSubmit(){
    this.datasaved= false
    let book = this.bookForm.value
    this.createbook(book)
    this.bookForm.reset()
  }

  createbook(book:any){
    if(this.bookUpdate==null){

      this.service.createBooksDetails(book).subscribe(book=>{
        this.datasaved=true
        this.showBook()
        this.bookUpdate=null
      })
    }
    else{
      book.id = this.bookUpdate
      this.service.updateBooksDetails(book).subscribe(book=>{
        this.datasaved=true
        this.showBook()
        this.bookUpdate=null
      })
    }
  }
  
  bookUpdate = null
  edit(id:any){
    this.service.getBookById(id).subscribe(book=>{
      this.bookUpdate = id
      this.bookForm.controls['id'].setValue(book.id)
      this.bookForm.controls['name'].setValue(book.name)
      this.bookForm.controls['category'].setValue(book.category)
      
    })
  }

  delete(id:any){
    this.service.deleteBooksDetails(id).subscribe(book=>{
      this.showBook()
    })
  }
}
