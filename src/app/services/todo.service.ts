import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TaskI, TaskTriplay, TaskMuebles, Taskpedidomadera, Taskpedidomuebles, Taskpedidotriplay } from '../models/task,interface';
import * as firebase from 'Firebase';
import { AlertController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
items: any[] = [];
objetos: any[] = [];
products: any[] = [];
Productosmuebles: any [] = [];
Productostriplay: any [] = [];
Productosmadera: any [] = [];

  // madera
private todosCollection: AngularFirestoreCollection<TaskI>;
private todos: Observable<TaskI[]>;

  //  pedido  madera
  private todosCollectionPMA: AngularFirestoreCollection<Taskpedidomadera>;
  private todosPMA: Observable<Taskpedidomadera[]>;
// tryplay
private todosCollectionTriplay: AngularFirestoreCollection<TaskTriplay>;
private todosTriplay: Observable<TaskTriplay[]>;
// pedidos tryplay
private todosCollectionTriplayPT: AngularFirestoreCollection<Taskpedidotriplay>;
private todosTriplayPT: Observable<Taskpedidotriplay[]>;

// Muebles
private todosCollectionMuebles: AngularFirestoreCollection<TaskMuebles>;
private todosMuebles: Observable<TaskMuebles[]>;
// Muebles
private todosCollectionMueblesP: AngularFirestoreCollection<Taskpedidomuebles>;
private todosMueblesP: Observable<Taskpedidomuebles[]>;

  constructor(db: AngularFirestore, private alertCtrl: AlertController,
    private platform: Platform, private storage: Storage) {
this.cargar_storage();
this.cargar_storageM();
this.cargar_storageT();


    // madera
    this.todosCollection = db.collection<TaskI>('madera');
    this.todos = this.todosCollection.snapshotChanges().pipe(map(
      action => {
        return action.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data };

        });
      }
    ));
     // pedido madera
     this.todosCollectionPMA = db.collection<Taskpedidomadera>('pedidomadera');
     this.todosPMA = this.todosCollectionPMA.snapshotChanges().pipe(map(
       action => {
         return action.map(a => {
           const data = a.payload.doc.data();
           const id = a.payload.doc.id;
           return {id, ...data };
        });
       }
     ));

    // triplay
    this.todosCollectionTriplay = db.collection<TaskTriplay>('triplay');
    this.todosTriplay = this.todosCollectionTriplay.snapshotChanges().pipe(map(
      action => {
        return action.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data };

        });
      }
    ));
    // pedidos triplay
    this.todosCollectionTriplayPT = db.collection<Taskpedidotriplay>('pedidotriplay');
    this.todosTriplayPT = this.todosCollectionTriplayPT.snapshotChanges().pipe(map(
      action => {
        return action.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data };

        });
      }
    ));
   // muebles
   this.todosCollectionMuebles = db.collection<TaskMuebles>('muebles');
   this.todosMuebles = this.todosCollectionMuebles.snapshotChanges().pipe(map(
     action => {
       return action.map(a => {
         const data = a.payload.doc.data();
         const id = a.payload.doc.id;
         return {id, ...data };

       });
     }
   ));
    // muebles
    this.todosCollectionMueblesP = db.collection<Taskpedidomuebles>('pedidomuebles');
    this.todosMueblesP = this.todosCollectionMueblesP.snapshotChanges().pipe(map(
      action => {
        return action.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data };
        });
      }
    ));
  }

  // metodo para añadir al carrito de muebles...............................................
   agregar_carrito(item_parametro: any) {
    if (this.items.push(item_parametro)) {
      alert('Agregado con exito');
    }
    this.guardar_storage();
    }
private guardar_storage() {
if (this.platform.is('cordova')) {
  // dispositvos
  this.storage.set('items', this.items);
} else {
// computadora
localStorage.setItem('items', JSON.stringify(this.items));
}
}
cargar_storage() {
  // tslint:disable-next-line:no-shadowed-variable
  const promesa = new Promise( (resolve, reject) => {
    if ( this.platform.is('cordova')) {
      this.storage.ready()
      .then(() => {
        this.storage.get('items').then( items => {
          if ( items ) {
            this.items = items;

          }
          resolve();
        });
    });

    } else {
      if ( localStorage.getItem('items')) {
this.items = JSON.parse( localStorage.getItem('items'));
      }
      resolve();
    }
  });
  return promesa;
}
// eliminar pedidos de orden pedido muebles
remove_item (idx: number) {
  this.items.splice(idx, 1);
  this.guardar_storage();
}

// mandar pedido de muebles
async realizarPedido() {
const data = new URLSearchParams();
for ( const item of this.items) {
this.Productosmuebles.push( item.nombre, item.largo, item.ancho ,
   item.altura, item.descripcion, item.numero);
}
console.log(this.Productosmuebles);
data.append('items', this.Productosmuebles.join( ','));
console.log(this.Productosmuebles.join( ','));
if ( this.items = [] ) {
const alert = await this.alertCtrl.create({
  header: 'Orden realizada',
  subHeader: 'Nos contactaremos con usted proximamente',
  buttons: ['OK']

});
return await alert.present();

}
}
 // metodo para añadir al carrito de triplay.......................................................
 agregar_carritoT(product_parametro: any) {
 if ( this.products.push(product_parametro)) {
  alert('Agregado con exito');
 }
  this.guardar_storageT();
  }
private guardar_storageT() {
if (this.platform.is('cordova')) {
// dispositvos
this.storage.set('products', this.products);
} else {
// computadora
localStorage.setItem('products', JSON.stringify(this.products));
}
}
cargar_storageT() {
// tslint:disable-next-line:no-shadowed-variable
const promesa = new Promise( (resolve, reject) => {
  if ( this.platform.is('cordova')) {
    this.storage.ready()
    .then(() => {
      this.storage.get('products').then( products => {
        if ( products ) {
          this.products = products;

        }
        resolve();
      });
  });

  } else {
    if ( localStorage.getItem('products')) {
this.products = JSON.parse( localStorage.getItem('products'));
    }
    resolve();
  }
});
return promesa;
}
// eliminar pedidos de orden pedido triplay
remove_itemT (idx: number) {
this.products.splice(idx, 1);
this.guardar_storageT();
}
// mandar pedido de triplay
async realizarPedidoT() {
  for ( const item of this.products) {
  this.Productostriplay.push(item.nombre, item.dimension,
     item.espesor, item.especie, item.calidad, item.bulto, item.numero );
  }
  console.log(this.Productostriplay);
  if ( this.products = [] ) {
  const alert = await this.alertCtrl.create({
    header: 'Orden realizada',
    subHeader: 'Nos contactaremos con usted proximamente',
    buttons: ['OK']
  });
  return await alert.present();
  }
  }
 // metodo para añadir al carrito de madera..............................................................
agregar_carritoM(objeto_parametro: any) {
 if  (this.objetos.push(objeto_parametro)) {
  alert('Agregado con exito');
 }
  this.guardar_storageM();
  }
private guardar_storageM() {
if (this.platform.is('cordova')) {
// dispositvos
this.storage.set('objetos', this.objetos);
} else {
// computadora
localStorage.setItem('objetos', JSON.stringify(this.objetos));
}
}
cargar_storageM() {
// tslint:disable-next-line:no-shadowed-variable
const promesa = new Promise( (resolve, reject) => {
  if ( this.platform.is('cordova')) {
    this.storage.ready()
    .then(() => {
      this.storage.get('objetos').then( objetos => {
        if ( objetos ) {
          this.objetos = objetos;

        }
        resolve();
      });
  });

  } else {
    if ( localStorage.getItem('objetos')) {
this.objetos = JSON.parse( localStorage.getItem('objetos'));
    }
    resolve();
  }
});
return promesa;
}
// eliminar pedidos de orden pedido madera
remove_itemM (idx: number) {
this.objetos.splice(idx, 1);
this.guardar_storageM();
}
// mandar pedido de madera
async realizarPedidoM() {
  for ( const item of this.objetos) {
  this.Productosmadera.push(item.nombre, item.grueso,
     item.ancho, item.largo, item.clase, item.bulto, item.numero );
  }
  console.log(this.Productosmadera);
  if ( this.objetos = [] ) {
  const alert = await this.alertCtrl.create({
    header: 'Orden realizada',
    subHeader: 'Nos contactaremos con usted proximamente',
    buttons: ['OK']
  });
  return await alert.present();
  }
  }
   // madera
   getTodos() {
     return this.todos;
   }
   getTodo(id: string ) {
     return this.todosCollection.doc<TaskI>(id).valueChanges();
   }

   updateTodo( todo: TaskI, id: string ) {
     return this.todosCollection.doc(id).update(todo);
   }

   addTodo(todo: TaskI) {
return this.todosCollection.add(todo);
   }

   removeTodo(id: string) {
return this.todosCollection.doc(id).delete();
   }
    // pedido madera
    getTodosPMA() {
      return this.todosPMA;
    }
    getTodoPMA(id: string ) {
      return this.todosCollectionPMA.doc<Taskpedidomadera>(id).valueChanges();
    }
    updateTodoPMA( pedidomadera: Taskpedidomadera, id: string ) {
      return this.todosCollectionPMA.doc(id).update(pedidomadera);
    }
    addTodoPMA(pedidomadera: Taskpedidomadera) {
 return this.todosCollectionPMA.add(pedidomadera);
    }
    removeTodoPMA(id: string) {
 return this.todosCollectionPMA.doc(id).delete();
    }

   // triplay
   getTodosTriplay() {
    return this.todosTriplay;
  }
  getTodoTriplay(id: string ) {
    return this.todosCollectionTriplay.doc<TaskTriplay>(id).valueChanges();
  }

  updateTodoTriplay( triplay: TaskTriplay, id: string ) {
    return this.todosCollectionTriplay.doc(id).update(triplay);
  }

  addTodoTriplay(triplay: TaskTriplay) {
return this.todosCollectionTriplay.add(triplay);
  }

  removeTodoTriplay(id: string) {
return this.todosCollectionTriplay.doc(id).delete();
  }
   // peido triplay
   getTodosTriplayP() {
    return this.todosTriplayPT;
  }
  getTodoTriplayP(id: string ) {
    return this.todosCollectionTriplayPT.doc<Taskpedidotriplay>(id).valueChanges();
  }

  updateTodoTriplayP( triplay: Taskpedidotriplay, id: string ) {
    return this.todosCollectionTriplayPT.doc(id).update(triplay);
  }

  addTodoTriplayP(triplay: Taskpedidotriplay) {
return this.todosCollectionTriplayPT.add(triplay);
  }

  removeTodoTriplayP(id: string) {
return this.todosCollectionTriplayPT.doc(id).delete();
  }

// muebles
getTodosMuebles() {
  return this.todosMuebles;
}
getTodoMuebles(id: string ) {
  return this.todosCollectionMuebles.doc<TaskMuebles>(id).valueChanges();
}

updateTodoMuebles( muebles: TaskMuebles, id: string ) {
  return this.todosCollectionMuebles.doc(id).update(muebles);
}

addTodoMuebles(muebles: TaskMuebles) {
return this.todosCollectionMuebles.add(muebles);
}

removeTodoMuebles(id: string) {
return this.todosCollectionMuebles.doc(id).delete();
}
// pediod muebles
getTodosMueblesP() {
  return this.todosMueblesP;
}
getTodoMueblesP(id: string ) {
  return this.todosCollectionMueblesP.doc<Taskpedidomuebles>(id).valueChanges();
}

updateTodoMueblesP( muebles: Taskpedidomuebles, id: string ) {
  return this.todosCollectionMueblesP.doc(id).update(muebles);
}

addTodoMueblesP(muebles: Taskpedidomuebles) {
return this.todosCollectionMueblesP.add(muebles);
}

removeTodoMueblesP(id: string) {
return this.todosCollectionMueblesP.doc(id).delete();
}



// IMAGEN.................................................................................................................................
  uploadImage(imageURI) {
    // tslint:disable-next-line:no-shadowed-variable
    return new Promise<any>((resolve, reject) => {
    const storageRef = firebase.storage().ref();
    const imageRef = storageRef.child('image');
    this.encodeImageUri(imageURI, function(image64) {
      imageRef.putString(image64, 'data_url')
      .then(snapshot => {
        resolve(snapshot.downloadURL);
      }, err => {
       reject(err);
      });
    });
  });
}

encodeImageUri(imageUri, callback) {
  const c = document.createElement('canvas');
  const ctx = c.getContext('2d');
  const img = new Image();
  img.onload = function () {
    const aux: any = this;
    c.width = aux.width;
    c.height = aux.height;
    ctx.drawImage(img, 0, 0);
    const dataURL = c.toDataURL('image/jpeg');
    callback(dataURL);
  };
  img.src = imageUri;
}
}
