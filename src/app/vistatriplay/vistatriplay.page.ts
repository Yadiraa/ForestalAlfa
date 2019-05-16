import { Component, OnInit } from '@angular/core';
import { TaskTriplay } from '../models/task,interface';
import { TodoService } from '../services/todo.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-vistatriplay',
  templateUrl: './vistatriplay.page.html',
  styleUrls: ['./vistatriplay.page.scss'],
})
export class VistatriplayPage implements OnInit {
  todos: TaskTriplay[];
  public goalList: any[];
  public loadedGoalList: any[];
  constructor(private todoService: TodoService, private firestore: AngularFirestore) {}

  ngOnInit() {
    this.todoService.getTodosTriplay().subscribe( res => this.todos = res);
    this.firestore.collection<TaskTriplay>('triplay').valueChanges().subscribe( goalList => {
      this.goalList = goalList;
       this.loadedGoalList = goalList;
       });
  }
  initializeItems(): void {
    this.goalList = this.loadedGoalList;
    }
    filterList(evt) {
      this.initializeItems();
      const searchTerm = evt.srcElement.value;

      if (!searchTerm) {
      return;
      }
      this.goalList = this.goalList.filter(currentGoal => {
      if (currentGoal.nombre && searchTerm) {
      if (currentGoal.nombre.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
      return true;
      }
      return false;
      }
      });
      }

}
