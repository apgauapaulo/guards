import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { LeadsComponent } from './page/leads/leads.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'leads',
    component: LeadsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
