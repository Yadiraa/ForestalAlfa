import { Component, OnInit } from '@angular/core';
import { TaskMuebles} from '../models/task,interface';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-muebles',
  templateUrl: './muebles.page.html',
  styleUrls: ['./muebles.page.scss'],
})
export class MueblesPage implements OnInit {
  todos: TaskMuebles[];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodosMuebles().subscribe( res => this.todos = res);
  }

}
