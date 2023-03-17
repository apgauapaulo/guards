import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { LeadsComponent } from './page/leads/leads.component';


@NgModule({
  declarations: [
    DashboardComponent,
    LeadsComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
