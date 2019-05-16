import { Component, OnInit } from '@angular/core';
import * as firebase from 'Firebase';
import { TaskI } from '../models/task,interface';
import { TodoService } from '../services/todo.service';
@Component({
  selector: 'app-madera',
  templateUrl: './madera.page.html',
  styleUrls: ['./madera.page.scss'],
})
export class MaderaPage implements OnInit {
 todos: TaskI[];
  constructor(private todoService: TodoService) {
  }
  ngOnInit() {
this.todoService.getTodos().subscribe( res => this.todos = res);

}
}
