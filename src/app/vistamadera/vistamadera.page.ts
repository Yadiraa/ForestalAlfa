import { Component, OnInit } from '@angular/core';
import { TaskI } from '../models/task,interface';
import { TodoService } from '../services/todo.service';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-vistamadera',
  templateUrl: './vistamadera.page.html',
  styleUrls: ['./vistamadera.page.scss'],
})
export class VistamaderaPage implements OnInit {
  todos: TaskI[];
  public goalList: any[];
  public loadedGoalList: any[];
  constructor(private todoService: TodoService, private firestore: AngularFirestore) { }

  ngOnInit() {
  this.todoService.getTodos().subscribe( res => this.todos = res);
    this.firestore.collection<TaskI>('madera').valueChanges().subscribe( goalList => {
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
