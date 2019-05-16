import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PedidomueblesPage } from './pedidomuebles.page';

const routes: Routes = [
  {
    path: '',
    component: PedidomueblesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PedidomueblesPage]
})
export class PedidomueblesPageModule {}
