import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    MatDatepickerModule,
    MatFormFieldModule
} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table/table.component';


@NgModule({
    imports: [MatButtonModule,
        MatCheckboxModule,
        CommonModule,
        MatToolbarModule,
        MatInputModule, 
        MatProgressSpinnerModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
        MatMenuModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatIconModule],
    exports: [MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatInputModule, 
        MatProgressSpinnerModule,
        MatCardModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatMenuModule,
        MatIconModule],

})


export class MaterialModule { }