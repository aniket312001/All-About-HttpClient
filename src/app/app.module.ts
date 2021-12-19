import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { MapComponent } from './map/map.component';
import { NewAPIComponent } from './new-api/new-api.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BookstoreService } from './new-api/bookstore.service';
import { Test } from './new-api/test';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AsyncPipeComponent,
    SingleUserComponent,
    MapComponent,
    NewAPIComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(Test),
    ReactiveFormsModule,
    // FormsModule,
  ],
  
  providers: [BookstoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
