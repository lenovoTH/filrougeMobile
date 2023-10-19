import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    IonicModule,
  ],
  exports: [NavbarComponent],
})
export class LayoutModule { }
