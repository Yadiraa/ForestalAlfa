import { Component, OnInit } from '@angular/core';
import { Taskpedidomadera, TaskI } from '../models/task,interface';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-pedidomadera',
  templateUrl: './pedidomadera.page.html',
  styleUrls: ['./pedidomadera.page.scss'],
})
export class PedidomaderaPage implements OnInit {
  todos: Taskpedidomadera[];
  todoId: null;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodosPMA().subscribe( res => this.todos = res);
  }
  onRemove(idTodo: string) {
    this.todoService.removeTodoPMA(idTodo);
    }
}
