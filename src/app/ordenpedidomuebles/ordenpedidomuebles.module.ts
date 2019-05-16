import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrdenpedidomueblesPage } from './ordenpedidomuebles.page';

const routes: Routes = [
  {
    path: '',
    component: OrdenpedidomueblesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrdenpedidomueblesPage]
})
export class OrdenpedidomueblesPageModule {}
