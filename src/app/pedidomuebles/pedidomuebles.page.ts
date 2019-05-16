import { Component, OnInit } from '@angular/core';
import { Taskpedidomuebles } from '../models/task,interface';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-pedidomuebles',
  templateUrl: './pedidomuebles.page.html',
  styleUrls: ['./pedidomuebles.page.scss'],
})
export class PedidomueblesPage implements OnInit {
  todos: Taskpedidomuebles[];
  todoId: null;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodosMueblesP().subscribe( res => this.todos = res);
  }
  onRemove(idTodo: string) {
    this.todoService.removeTodoMueblesP(idTodo);
    }
}
