import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EstagiopageComponent } from './estagiopage/estagiopage.component';

const routes: Routes = [

  {path:'app-component', component: AppComponent},
  {path:'estagiopage', component: EstagiopageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
