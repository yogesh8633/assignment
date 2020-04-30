import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './introduction.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../Material/material.module';
import { FooterModule } from '../footer/footer.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from '../header/header.module';
const routes: Routes = [
  {
    path: '',
    component: IntroductionComponent
  },


];
@NgModule({
  declarations: [IntroductionComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    FooterModule,
    HttpClientModule,
    CommonModule,
 
    HeaderModule,
    RouterModule.forChild(routes),
  ],
  exports: [IntroductionComponent],
})
export class IntroductionModule { }
