import { Component, OnInit } from '@angular/core';
import { TaskTriplay } from '../models/task,interface';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-triplay',
  templateUrl: './triplay.page.html',
  styleUrls: ['./triplay.page.scss'],
})
export class TriplayPage implements OnInit {
  todos: TaskTriplay[];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodosTriplay().subscribe( res => this.todos = res);
  }

}

