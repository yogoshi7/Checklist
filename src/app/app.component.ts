import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from "./list/component/list.component";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../../node_modules/bootstrap/dist/css/bootstrap.min.css'],
})
export class AppComponent {
  title = 'Checklist-App';
  checklistTitle: string = 'New checklist';
  isTitleEdit: boolean = false;

  editTitle() {
    this.isTitleEdit = true;
  }
  leaveEdit() {
    this.isTitleEdit = false;
  }
}
