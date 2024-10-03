import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from "../task";
import { ListService } from "../../list/service/list.service";
import { TaskService } from "../service/task.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  providers: [ListService, TaskService]
})
export class TaskComponent implements OnInit{
  @Input()
  //@ts-ignore
  public task: Task;
  public newValue: string = '';
  public prevValue: string = '';
  public isEdit: boolean = false;
  @Output()
  public doDelete = new EventEmitter<void>();

  constructor(private listService: ListService) {
  }

  public ngOnInit() {

  }

  public editTask(): void {
    this.isEdit = true;
    this.prevValue = this.newValue = this.task.body;
  }

  public deleteTask(): void {
    this.doDelete.emit();
  }

  public cancelEdit(save: boolean = false) {
    this.isEdit = false;
    this.task.body = save ? this.newValue : this.prevValue;
  }

  public completeTask() {
    this.task.completion = !this.task.completion;
  }
}
