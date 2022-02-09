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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
