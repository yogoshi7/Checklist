

export class Task {
  static id: number = 1;
  private readonly _id: number;
  constructor(private _body: string = 'Your new task', private _completion: boolean = false) {
    this._id = Task.id++;
  }

  set body(body: string) {
    this._body = (body.trim().length > 0 && body) ? body : '';
  }

  get body() {
    return this._body;
  }

  set completion(comp: boolean) {
    this._completion = comp;
  }

  get completion() {
    return this._completion;
  }

  get id() {
    return this._id;
  }
}
