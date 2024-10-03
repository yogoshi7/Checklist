import { Injectable } from '@angular/core';
import { Task } from "../../task/task";

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private list: Task[] = [
    new Task('Complete Checklist Project'),
    new Task('Make Pizza'),
    new Task('Play Valorant'),
    new Task('Take A Good Nap'),];
  addTask(task: Task): void {
    this.list.push(task);
  }
  deleteTask(index: number):void {
    this.list.splice(index, 1);
  }
  getTasks(): Task[] {
    return this.list;
  }
  getTask(index: number): Task {
    return this.list[index];
  }
  deleteAll(): void {
    this.list.splice(0, this.list.length);
  }
  constructor() { }
}
