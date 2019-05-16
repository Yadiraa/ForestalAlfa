import { Component, OnInit } from '@angular/core';
import { Taskpedidotriplay } from '../models/task,interface';
import { TodoService } from '../services/todo.service';
@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {
  todos: Taskpedidotriplay[];
  todoId: null;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodosTriplayP().subscribe( res => this.todos = res);
  }
  onRemove(idTodo: string) {
    this.todoService.removeTodoTriplayP(idTodo);
    }
}
