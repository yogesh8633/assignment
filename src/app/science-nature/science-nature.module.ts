import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../Material/material.module';
import { FooterModule } from '../footer/footer.module';
import { CommonModule } from '@angular/common';
import { ScienceNatureComponent } from './science-nature.component';
import { AnimalsComponent } from './animals/animals.component';
import { EnvironmentComponent } from './environment/environment.component';
import { FoodDrinkComponent } from './food-drink/food-drink.component';
import { HeaderModule } from '../header/header.module';

const routes: Routes = [
    { path: '', component: ScienceNatureComponent },
    { path: 'animals', component: AnimalsComponent },
    { path: 'environment', component: EnvironmentComponent },
    { path: 'food-drink', component: FoodDrinkComponent }
];
@NgModule({

    declarations: [
        AnimalsComponent,
        EnvironmentComponent,
        FoodDrinkComponent,
        ScienceNatureComponent
    ],
    imports: [


        RouterModule.forChild(routes),
        MaterialModule,
        FooterModule,
        CommonModule,
        HeaderModule

    ],

})
export class ScienceNatureModule { }
