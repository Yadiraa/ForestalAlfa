import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'madera', loadChildren: './madera/madera.module#MaderaPageModule' },
  { path: 'catalogo', loadChildren: './catalogo/catalogo.module#CatalogoPageModule' },
  { path: 'triplay', loadChildren: './triplay/triplay.module#TriplayPageModule' },
  { path: 'muebles', loadChildren: './muebles/muebles.module#MueblesPageModule' },
  { path: 'pedidos', loadChildren: './pedidos/pedidos.module#PedidosPageModule' },
  { path: 'pedidos/:id', loadChildren: './pedidos/pedidos.module#PedidosPageModule' },
  { path: 'categoria', loadChildren: './categoria/categoria.module#CategoriaPageModule' },
  { path: 'addmadera', loadChildren: './addmadera/addmadera.module#AddmaderaPageModule' },
  { path: 'addmadera/:id', loadChildren: './addmadera/addmadera.module#AddmaderaPageModule' },
  { path: 'cliente', loadChildren: './cliente/cliente.module#ClientePageModule' },
  { path: 'ejecutivologin', loadChildren: './ejecutivologin/ejecutivologin.module#EjecutivologinPageModule' },
  { path: 'vistacategoria', loadChildren: './vistacategoria/vistacategoria.module#VistacategoriaPageModule' },
  { path: 'vistamadera', loadChildren: './vistamadera/vistamadera.module#VistamaderaPageModule' },
  { path: 'vistatriplay', loadChildren: './vistatriplay/vistatriplay.module#VistatriplayPageModule' },
  { path: 'vistamuebles', loadChildren: './vistamuebles/vistamuebles.module#VistamueblesPageModule' },
  { path: 'addtriplay', loadChildren: './addtriplay/addtriplay.module#AddtriplayPageModule' },
  { path: 'addtriplay/:id', loadChildren: './addtriplay/addtriplay.module#AddtriplayPageModule' },
  { path: 'ordenpedido', loadChildren: './ordenpedido/ordenpedido.module#OrdenpedidoPageModule' },
  { path: 'registrar', loadChildren: './registrar/registrar.module#RegistrarPageModule' },
  { path: 'ordenpedido-madera', loadChildren: './ordenpedido-madera/ordenpedido-madera.module#OrdenpedidoMaderaPageModule' },
  { path: 'ordenpedido-madera/:id', loadChildren: './ordenpedido-madera/ordenpedido-madera.module#OrdenpedidoMaderaPageModule' },
  { path: 'addmuebles', loadChildren: './addmuebles/addmuebles.module#AddmueblesPageModule' },
  { path: 'addmuebles/:id', loadChildren: './addmuebles/addmuebles.module#AddmueblesPageModule' },
  { path: 'pedidomuebles', loadChildren: './pedidomuebles/pedidomuebles.module#PedidomueblesPageModule' },
  { path: 'pedidomuebles/:id', loadChildren: './pedidomuebles/pedidomuebles.module#PedidomueblesPageModule' },
  { path: 'ordenpedidomuebles', loadChildren: './ordenpedidomuebles/ordenpedidomuebles.module#OrdenpedidomueblesPageModule' },
  { path: 'producto', loadChildren: './producto/producto.module#ProductoPageModule' },
  { path: 'producto/:id', loadChildren: './producto/producto.module#ProductoPageModule' },
  { path: 'producto-m', loadChildren: './producto-m/producto-m.module#ProductoMPageModule' },
  { path: 'producto-m/:id', loadChildren: './producto-m/producto-m.module#ProductoMPageModule' },
  { path: 'producto-t', loadChildren: './producto-t/producto-t.module#ProductoTPageModule' },
  { path: 'producto-t/:id', loadChildren: './producto-t/producto-t.module#ProductoTPageModule' },
  { path: 'pedidomadera', loadChildren: './pedidomadera/pedidomadera.module#PedidomaderaPageModule' },
  { path: 'pedidomadera/:id', loadChildren: './pedidomadera/pedidomadera.module#PedidomaderaPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
