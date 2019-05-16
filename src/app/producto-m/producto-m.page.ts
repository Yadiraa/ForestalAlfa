import { Component, OnInit, ViewChild } from '@angular/core';
import { TaskI} from '../models/task,interface';
import { TodoService } from '../services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-producto-m',
  templateUrl: './producto-m.page.html',
  styleUrls: ['./producto-m.page.scss'],
})
export class ProductoMPage implements OnInit {
  todo: TaskI = {
    nombre: '',
    grueso: '',
    ancho: '',
    largo: '',
    clase: '',
    bulto: '',
  };
  todoId = null;

  constructor(private router: ActivatedRoute, public loadingController: LoadingController,
    private todoService: TodoService) { }

  ngOnInit() {
    this.todoId = this.router.snapshot.params['id'];
    if (this.todoId) {
      this.loadTodo();
    }
  }

  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Cargando..'
    });
    await loading.present();
    this.todoService.getTodo(this.todoId).subscribe(res => {
      loading.dismiss();
      this.todo = res;
    });
  }
}
