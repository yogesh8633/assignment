import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../Material/material.module';
import { FooterModule } from '../footer/footer.module';
import { CommonModule } from '@angular/common';
import { BusinessEconomyComponent } from './business-economy/business-economy.component';
import { CrimeLawComponent } from './crime-law/crime-law.component';
import { HistoryComponent } from './history/history.component';
import { WorldHistoryComponent } from './world-history.component';
import { HeaderModule } from '../header/header.module';

const routes: Routes = [
    { path: '', component: WorldHistoryComponent },
    { path: 'business-economy', component: BusinessEconomyComponent },
    { path: 'crime-law', component: CrimeLawComponent },
    { path: 'history', component: HistoryComponent }
]; 
@NgModule({
    declarations: [
        BusinessEconomyComponent,
        CrimeLawComponent,
        HistoryComponent,
        WorldHistoryComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        MaterialModule,
        FooterModule,
        CommonModule,
        HeaderModule

    ],

})
export class WorldHistoryModule { }
