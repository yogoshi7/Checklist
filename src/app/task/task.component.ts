import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Task } from "./task";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input()
  public task: Task = new Task();
  public isEdit: boolean = false;
  @Output()
  public doDelete = new EventEmitter<Task>();

  public editTask(): void {
    this.isEdit = true;
  }

  public deleteTask(): void {
    this.doDelete.emit(this.task);
  }

  public saveTask(): void {

  }
}
