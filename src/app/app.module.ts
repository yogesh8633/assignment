import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './Material/material.module';
import { RegistrationComponent } from './registration/registration.component';
import { HomePageComponent } from './home-page/home-page.component';

import { FooterModule } from './footer/footer.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AuthGuard } from 'src/services/storage/auth-guard/auth-guard.service';
import { HeaderModule } from './header/header.module';
const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'introduction',
    loadChildren: './introduction/introduction.module#IntroductionModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'entertainment',
    loadChildren: './entertainment/entertainment.module#EntertainmentModule',
    canActivate: [AuthGuard]

  },

  {
    path: 'science-nature',
    loadChildren: './science-nature/science-nature.module#ScienceNatureModule',
    canActivate: [AuthGuard]

  },
  {
    path: 'world-history',
    loadChildren: './world-history/world-history.module#WorldHistoryModule',
    canActivate: [AuthGuard]

  },
  {
    path: 'my-profile',
    loadChildren: './my-profile/my-profile.module#MyProfileModule',
    canActivate: [AuthGuard]

  },
  {
    path:'my-favourite',
    loadChildren: './my-favourite/my-favourite.module#MyFavouriteModule',
    canActivate: [AuthGuard]
  }
];
@NgModule({


  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule, 
    FormsModule,
    FooterModule,
    HttpClientModule,
    CommonModule,
    HeaderModule,
    RouterModule.forRoot(routes),

  ],
  declarations: [AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomePageComponent,

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  exports: [

    MaterialModule
  ],

})
export class AppModule { }
