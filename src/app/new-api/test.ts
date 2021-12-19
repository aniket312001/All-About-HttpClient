import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";

export class Test implements InMemoryDbService{

    createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
        let bookDetails =[
            {id:101,name:"Angular",category:"Frontend"},
            {id:102,name:"Node",category:"Backend"},
            {id:103,name:"Js",category:"FullStack"},
            {id:103,name:"Js",category:"FullStack"},
            {id:103,name:"Js",category:"FullStack"},
            {id:103,name:"Js",category:"FullStack"},
        ]
        return {books:bookDetails}
    }
}
