import { Component } from '@angular/core';
import { Task } from "./task";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  public task: Task = new Task();
}
