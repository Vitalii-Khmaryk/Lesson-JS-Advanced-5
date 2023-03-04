import { Component } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent {
  public nameTask!: string;
  public childnameTask!: string;
  public childTaskMass: string[] = [
    'HTML5',
    'JavaScript',
    'Angular',
  ];
  public count = this.childTaskMass.length;
  public place: string = 'Write the task';
  addTask(): void {
    if (this.nameTask === undefined) {
      this.place = 'Please write the task!';
    } else {
      this.place = '';
      this.childnameTask = this.nameTask;
      this.childTaskMass.push(this.childnameTask);
      this.count = this.childTaskMass.length;
      this.nameTask = '';
    }
  }
  getCount(data: number): void {
    this.count = data;
  }
}
