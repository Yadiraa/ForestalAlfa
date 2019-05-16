import { AuthenticationService } from '../services/authentication.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Taskpedidotriplay } from '../models/task,interface';
import { LoadingController, ToastController} from '@ionic/angular';
@Component({
  selector: 'app-ordenpedido',
  templateUrl: './ordenpedido.page.html',
  styleUrls: ['./ordenpedido.page.scss'],
})
export class OrdenpedidoPage implements OnInit {

  @ViewChild('cliente1') cliente2;
  @ViewChild('telefono1') telefono2;
  @ViewChild('codigo1') codigo2;
  @ViewChild('opcion1') opcion2;
  userEmail: string;
  todo: Taskpedidotriplay = {
    cliente: '',
    telefono: '',
    codigo: '',
    opcion: '',
    producto: ['']
  };
  todoId = null;

  constructor( private authService: AuthenticationService, private todoservice: TodoService,
     public loadingController: LoadingController, public toastController: ToastController) { }
     validarCampos() {
      // tslint:disable-next-line:max-line-length
      if (this.cliente2.value === '' || this.telefono2.value === ''  || this.codigo2.value === '' || this.opcion2.value === '') {
        alert('Ingrese todos los datos');
      } else {
       this.saveTodo();
      }
     }
  ngOnInit() {
    this.todo.producto = this.todoservice.Productostriplay;
    if (this.authService.userDetails()) {
      this.userEmail = this.authService.userDetails().email;
     } else {
    }
  }
  async saveTodo() {
    const loading = await this.loadingController.create({
      message: 'Enviando...'
    });
    await loading.present();
    this.todoservice.realizarPedidoT();
    if (this.todoId) {
      // update
      this.todoservice.updateTodoTriplayP(this.todo, this.todoId).then(() => {
        loading.dismiss();
      });
    } else {
// add new
this.todoservice.addTodoTriplayP(this.todo).then(() => {
  loading.dismiss();
    });
  }
}
  }
