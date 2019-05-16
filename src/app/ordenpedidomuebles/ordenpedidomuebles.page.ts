import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Taskpedidomuebles } from '../models/task,interface';
import { LoadingController, ToastController} from '@ionic/angular';


@Component({
  selector: 'app-ordenpedidomuebles',
  templateUrl: './ordenpedidomuebles.page.html',
  styleUrls: ['./ordenpedidomuebles.page.scss'],
})
export class OrdenpedidomueblesPage implements OnInit {
  @ViewChild('cliente1') cliente2;
  @ViewChild('telefono1') telefono2;
  @ViewChild('codigo1') codigo2;
  @ViewChild('opcion1') opcion2;
  todo: Taskpedidomuebles = {
    cliente: '',
    telefono: '',
    codigo: '',
    opcion: '',
    producto: ['']
   };
  todoId = null;
  constructor(private todoservice: TodoService, public loadingController: LoadingController, public toastController: ToastController) { }
  validarCampos() {
    // tslint:disable-next-line:max-line-length
    if (this.cliente2.value === '' || this.telefono2.value === ''  || this.codigo2.value === '' || this.opcion2.value === '') {
      alert('Ingrese todos los datos');
    } else {
     this.saveTodo();
    }
   }
  ngOnInit() {
   this.todo.producto = this.todoservice.Productosmuebles;
  }
  async saveTodo() {
    const loading = await this.loadingController.create({
      message: 'Enviando...'
    });
    await loading.present();
    this.todoservice.realizarPedido();
    if (this.todoId) {
      // update
      this.todoservice.updateTodoMueblesP(this.todo, this.todoId).then(() => {
        loading.dismiss();
      });
    } else {
// add new
this.todoservice.addTodoMueblesP(this.todo).then(() => {
  loading.dismiss();
    });
  }
}
}
