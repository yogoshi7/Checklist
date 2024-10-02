import { Task } from "../task/task";

export class List {
  constructor(private _tasks: Task[] = []) {
  }

  set tasks(tasks: Task[]) {
    this._tasks = tasks;
  }

  get tasks() {
    return this._tasks;
  }

  public addTask(task: Task): void {
    this._tasks.push(task);
  }
}
