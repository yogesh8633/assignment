import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../Material/material.module';
import { EntertainmentComponent } from './entertainment.component';
import { ArtDesignComponent } from './art-design/art-design/art-design.component';
import { CelebritiesComponent } from './celebrities/celebrities.component';
import { FashionBeautyComponent } from './fashion-beauty/fashion-beauty.component';
import { FooterModule } from '../footer/footer.module';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../header/header.module';

const routes: Routes = [
  { path: '', component: EntertainmentComponent },
  { path: 'art-design', component: ArtDesignComponent },
  { path: 'celebrities', component: CelebritiesComponent },
  { path: 'fashion-beauty', component: FashionBeautyComponent }
];
@NgModule({

  declarations: [
    EntertainmentComponent,
    ArtDesignComponent,
    CelebritiesComponent,
    FashionBeautyComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    MaterialModule,
    FooterModule,
    CommonModule,
    HeaderModule
  ],

})
export class EntertainmentModule { }
