import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../Material/material.module';

import { FooterModule } from '../footer/footer.module';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../header/header.module';
import { HttpClientModule } from '@angular/common/http';
import { MyFavouriteComponent } from './my-favourite.component';
const routes: Routes = [
    {
     path:"",
     component:MyFavouriteComponent 
    },
];
@NgModule({

  declarations: [ 
    MyFavouriteComponent
  ],
  imports: [
    MaterialModule,
    FooterModule,    
    CommonModule,
    HeaderModule,    
    RouterModule,
    HttpClientModule,
    RouterModule.forChild(routes),

  ],

})
export class MyFavouriteModule { }
           