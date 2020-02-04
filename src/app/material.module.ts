import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatError,
    MatFormFieldModule
} from '@angular/material';
import { LoginComponent } from './login/login.component';


@NgModule({
    imports: [MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatInputModule, 
        MatProgressSpinnerModule,
        MatCardModule,
        MatMenuModule,
        MatError,
        MatFormFieldModule,
        MatIconModule],
        declarations:[
            LoginComponent
        ],
    exports: [MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatError,
        MatFormFieldModule,
        MatMenuModule,
        MatIconModule],

})


export class MaterialModule { }