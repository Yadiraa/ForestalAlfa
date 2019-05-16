import { Component, OnInit, ViewChild } from '@angular/core';
import { TaskMuebles} from '../models/task,interface';
import { TodoService } from '../services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
  todoM: TaskMuebles = {
    imagen: '',
    nombre: '',
    largo: '',
    ancho: '',
    altura: '',
    descripcion: ''
  };
  todoIdT = null;
  constructor(private router: ActivatedRoute, public loadingController: LoadingController,
    private todoService: TodoService) { }

  ngOnInit() {
    this.todoIdT = this.router.snapshot.params['id'];
    if (this.todoIdT) {
      this.loadTodot();
    }
  }
  async loadTodot() {
    const loading = await this.loadingController.create({
      message: 'Loading..'
    });
    await loading.present();
    this.todoService.getTodoMuebles(this.todoIdT).subscribe(res => {
      loading.dismiss();
      this.todoM = res;
    });
  }
}
