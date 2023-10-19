import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanningComponent } from './planning/planning.component';
import { ListecourComponent } from './listecour/listecour.component';

const routes: Routes = [
  { path: 'planning', component: PlanningComponent },
  { path: 'listecour', component: ListecourComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
