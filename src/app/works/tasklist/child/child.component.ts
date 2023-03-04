import { Component,Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() taskMass: string[] = [];
  @Input() nameTask!: string;
  checked: boolean[] = [];
  color: string[] = [];
  text: string[] = [];
  editValue!: string;
  ngif: boolean = false;
  editIndex!: number;
  @Output() fromChild = new EventEmitter();
  constructor() {
    this.checked = new Array(this.taskMass.length).fill(false);
    this.color = new Array(this.taskMass.length).fill('red');
    this.text = new Array(this.taskMass.length).fill('In PROGRESS');
  }

  onChange(index: number) {
    if (this.checked[index]) {
      this.color[index] = 'green';
      this.text[index] = 'Done';
    } else {
      this.text[index] = 'In PROGRESS';
      this.color[index] = 'red';
    }
  }
  deleter(index: number): void {
    this.taskMass.splice(index, 1);
    this.checked[index] = false;
    this.fromChild.emit(this.taskMass.length);
  }
  edder(index: number): void {
    this.ngif = true;
    this.editValue = this.taskMass[index];
    this.editIndex = index;
  }
  saver(): void {
    this.taskMass[this.editIndex] = this.editValue;
    this.ngif = false;
  }
}
