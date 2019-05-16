import { Component, OnInit, ViewChild } from '@angular/core';
import { TaskTriplay} from '../models/task,interface';
import { TodoService } from '../services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-producto-t',
  templateUrl: './producto-t.page.html',
  styleUrls: ['./producto-t.page.scss'],
})
export class ProductoTPage implements OnInit {
  todoT: TaskTriplay = {
    nombre: '',
    dimension: '',
    espesor: '',
    especie: '',
    calidad: '',
    bulto: ''
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
    this.todoService.getTodoTriplay(this.todoIdT).subscribe(res => {
      loading.dismiss();
      this.todoT = res;
    });
  }

}
