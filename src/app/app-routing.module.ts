import { CardDetailsComponent } from './components/card-details/card-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    component:MainComponent,
    path: ""
  },
  {
    component:MainComponent,
    path: "region/:region"
  },
  {
    component:MainComponent,
    path: "name/:name"
  },
  {
    component:CardDetailsComponent,
    path: "details/:name"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
