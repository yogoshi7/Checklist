import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from "../task";
import { ListService } from "../../list/service/list.service";
import { TaskService } from "../service/task.service";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  providers: [ListService, TaskService]
})
export class TaskComponent implements OnInit{
  @Input()
  //@ts-ignore
  public task: Task;
  @Output()
  public currValue: string = '';
  public prevValue: string = '';
  @Input()
  public isEdit: boolean = false;
  @Output()
  public doDelete = new EventEmitter<void>();

  constructor(private listService: ListService) {
  }

  public ngOnInit() {
    
  }

  public editTask(): void {
    this.isEdit = true;
    this.prevValue = this.currValue;
  }

  public deleteTask(): void {
    this.doDelete.emit();
  }

  public saveTask(): void {

  }

  public cancelEdit() {
    this.isEdit = false;
  }

  public completeTask() {
    this.task.completion = !this.task.completion;
  }
}
