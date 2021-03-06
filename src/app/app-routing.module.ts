import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table/table.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'', component : LoginComponent },

  {path:'tables', component : TableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
