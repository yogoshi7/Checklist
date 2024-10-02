import { Component, OnInit } from '@angular/core';
import { List } from "./list";
import { Task } from "../task/task";
import { TaskComponent } from "../task/task.component";
import {FormsModule} from "@angular/forms";

let testTasks: Task[] = [
  new Task('Complete Checklist Project'),
  new Task('Make Pizza'),
  new Task('Play Some Valorant'),
  new Task('Take A Good Nap'),
]

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [TaskComponent, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{
  private _list: List;
  public showList: boolean = true;

  constructor() {
    this._list = new List(testTasks);
  }
  //do i really need this method?
  public ngOnInit() {
    // this._list = new List();
  }
  set list(list: List) {
    this._list = list;
  }
  get list() {
    return this._list;
  }
  public newTask() {

  }
  public deleteTask(task: Task) {
    this.list.deleteTask(task);
  }

}
