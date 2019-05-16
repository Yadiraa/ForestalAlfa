import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrdenpedidoMaderaPage } from './ordenpedido-madera.page';

const routes: Routes = [
  {
    path: '',
    component: OrdenpedidoMaderaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrdenpedidoMaderaPage]
})
export class OrdenpedidoMaderaPageModule {}
