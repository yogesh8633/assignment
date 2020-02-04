import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { AppComponent } from './app.component';
import { TableComponent } from './table/table/table.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';

@NgModule({


  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [AppComponent,
    TableComponent,
    ProfileComponent, 
    ],
  bootstrap: [AppComponent],
  exports: [

    MaterialModule
  ],

})
export class AppModule { }
