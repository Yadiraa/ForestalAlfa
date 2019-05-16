import { Component, OnInit } from '@angular/core';
import { TaskMuebles} from '../models/task,interface';
import { TodoService } from '../services/todo.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-vistamuebles',
  templateUrl: './vistamuebles.page.html',
  styleUrls: ['./vistamuebles.page.scss'],
})
export class VistamueblesPage implements OnInit {
  todos: TaskMuebles[];
  public goalList: any[];
  public loadedGoalList: any[];
  constructor(private todoService: TodoService,  private firestore: AngularFirestore) { }

  ngOnInit() {
    this.todoService.getTodosMuebles().subscribe( res => this.todos = res);
    this.firestore.collection<TaskMuebles>('muebles').valueChanges().subscribe( goalList => {
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
