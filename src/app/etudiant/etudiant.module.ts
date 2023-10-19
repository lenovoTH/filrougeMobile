import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { PlanningComponent } from './planning/planning.component';
import { ListecourComponent } from './listecour/listecour.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [PlanningComponent, ListecourComponent],
  imports: [
    CommonModule,
    EtudiantRoutingModule,
    IonicModule
  ]
})
export class EtudiantModule { }
