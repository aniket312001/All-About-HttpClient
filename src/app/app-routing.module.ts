import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { NewAPIComponent } from './new-api/new-api.component';
import { SingleUserComponent } from './single-user/single-user.component';

const routes: Routes = [
  {path:"user/:id",component:SingleUserComponent},
  {path:"map",component:MapComponent},
  {path:"store",component:NewAPIComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
