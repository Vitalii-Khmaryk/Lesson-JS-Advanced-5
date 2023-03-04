import { Component } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss']
})
export class CenzorComponent {
  public n = 0;
  public writer = '';
  public area = '';
  public myPlaceholder: any = 'word here...';
  public myPlaceholder1: any = 'text here...';
  public redBorder!: any;
  public redBorder1!: any;
  public redWord: string[] = ['java', ',', 'totenham'];

  adder() {
    if (this.writer == '') {
      this.myPlaceholder = 'Please write a word!';
      this.redBorder = 'redBorder';
    } else {
      this.redBorder = '';
      this.myPlaceholder = 'word here...';
      if (this.n === 1) {
        this.redWord.push(this.writer);
        this.n = 0;
        this.writer = '';
      } else {
        this.redWord.push(',');
        this.redWord.push(this.writer);
        this.writer = '';
      }
    }
  }

  reseter() {
    this.n = 1;
    this.redWord.splice(0, this.redWord.length);
    this.writer = '';
    this.area = '';
  }

  cenzors() {
    if (this.area == '') {
      this.redBorder1 = 'redBorder';
      this.myPlaceholder1 = 'Please write a word!';
    } else {
      this.redBorder1 = '';
      this.myPlaceholder1 = 'text here...';
      for (const word of this.redWord) {
        let reg = new RegExp(`\\b${word}\\b`, 'gi');
        this.area = this.area.replace(reg, '*'.repeat(word.length));
      }
    }
  }
}
