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

  public deleteTask(task: Task) {
    let index = this._tasks.findIndex(value => task.id === value.id);
    this._tasks.splice(index, 1);
  }
}
