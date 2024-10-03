import { Component, OnInit } from '@angular/core';
import { Task } from "../../task/task";
import { TaskComponent } from "../../task/component/task.component";
import { FormsModule } from "@angular/forms";
import { ListService } from "../service/list.service";
import { TaskService } from "../../task/service/task.service";

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
  styleUrl: './list.component.css',
  providers: [ListService, TaskService],
})
export class ListComponent implements OnInit{
  public list: Task[] = [];
  public showList: boolean = true;
  public editTask: boolean = false;

  constructor(private listService: ListService, private taskService: TaskService) {
  }
  public ngOnInit() {
    this.list = this.listService.getTasks();
  }

  public newTask(): void {
    let task: Task = new Task();
    //TODO: make new task appear as editable
    this.listService.addTask(task);
  }
  public deleteTask(index: number): void {
    this.listService.deleteTask(index);
  }
  public clearList(): void {
    this.listService.deleteAll();
  }

}
