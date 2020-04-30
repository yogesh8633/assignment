import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../Material/material.module';

import { FooterModule } from '../footer/footer.module';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../header/header.module';
import { MyProfileComponent } from './my-profile.component';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
    {
     path:"",
     component:MyProfileComponent 
    },
];
@NgModule({

  declarations: [ 
    MyProfileComponent
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
export class MyProfileModule { }
           