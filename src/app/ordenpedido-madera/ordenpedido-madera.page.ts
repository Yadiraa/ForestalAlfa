import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { AuthenticationService } from '../services/authentication.service';
import { Taskpedidomadera, TaskI } from '../models/task,interface';
import { LoadingController, ToastController} from '@ionic/angular';


@Component({
  selector: 'app-ordenpedido-madera',
  templateUrl: './ordenpedido-madera.page.html',
  styleUrls: ['./ordenpedido-madera.page.scss'],
})
export class OrdenpedidoMaderaPage implements OnInit {
  @ViewChild('cliente1') cliente2;
  @ViewChild('telefono1') telefono2;
  @ViewChild('codigo1') codigo2;
  @ViewChild('opcion1') opcion2;
  userEmail: string;
  todo: Taskpedidomadera = {
    cliente: '',
    telefono: '',
    codigo: '',
    opcion: '',
    producto: ['']
  };
  todoId = null;
  constructor(private todoservice: TodoService, private authService: AuthenticationService,
   public loadingController: LoadingController,  public toastController: ToastController ) { }
   validarCampos() {
    // tslint:disable-next-line:max-line-length
    if (this.cliente2.value === '' || this.telefono2.value === ''  || this.codigo2.value === '' || this.opcion2.value === '') {
      alert('Ingrese todos los datos');
    } else {
     this.saveTodo();
    }
   }
  ngOnInit() {
    this.todo.producto = this.todoservice.Productosmadera;
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
    this.todoservice.realizarPedidoM();
    if (this.todoId) {
      // update
      this.todoservice.updateTodoPMA(this.todo, this.todoId).then(() => {
        loading.dismiss();
        alert('enviado con exito');
      });
    } else {
// add new
this.todoservice.addTodoPMA(this.todo).then(() => {
  loading.dismiss();
    });
  }
}

}
