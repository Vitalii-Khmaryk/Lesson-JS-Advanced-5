import { Component } from '@angular/core';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.scss']
})
export class UserslistComponent {
  public userName!: string;
  public userEmail!: string;
  public userPass!: any;
  public dis: boolean = false;
  public loginRegExp: RegExp = /^\w{4,16}$/i;
  public passRegExp: RegExp = /(?<inputPass>^(\w-*_*\.*){4,16}$)/;
  public emailRegExp: RegExp = /(?<inputEmail>^\w+-*\.*\w+@\w+\.\w+$)/;
  public email!: boolean;
  public pass!: boolean;
  public login!: boolean;
  public classLogin!: string;
  public classPass!: string;
  public classEmail!: string;

  public userMass: string[] = [];
  public userMass1: string[] = [];
  public userMass2: string[] = [];

  public editStatus = false;
  public editIndex!: number;
  adder(): void {
    if (
      this.loginRegExp.test(this.userName) &&
      this.emailRegExp.test(this.userEmail) &&
      this.passRegExp.test(this.userPass)
    ) {
      this.userMass.push(this.userName);
      this.userMass1.push(this.userPass);
      this.userMass2.push(this.userEmail);
      this.userName = '';
      this.userEmail = '';
      this.userPass = '';
    }
  }

  inputerLogin() {
    this.login = this.loginRegExp.test(this.userName);
    if (this.login) {
      this.classLogin = 'focus';
    } else {
      this.classLogin = 'error';
    }
  }
  inputerPass() {
    this.pass = this.passRegExp.test(this.userPass);
    if (this.pass) {
      this.classPass = 'focus';
    } else {
      this.classPass = 'error';
    }
  }
  inputerEmail() {
    this.email = this.emailRegExp.test(this.userEmail);
    if (this.email) {
      this.classEmail = 'focus';
    } else {
      this.classEmail = 'error';
    }
  }
  deleter(index: number): void {
    this.userMass.splice(index, 1);
  }
  editer(index: number): void {
    this.userName = this.userMass[index];
    this.userPass = this.userMass1[index];
    this.userEmail = this.userMass2[index];
    this.editIndex = index;
    this.editStatus = true;
  }
  editUserBtn(): void {
    this.userMass[this.editIndex] = this.userName;
    this.userMass1[this.editIndex] = this.userPass;
    this.userMass2[this.editIndex] = this.userEmail;
    this.userName = '';
    this.userPass = '';
    this.userEmail = '';
    this.editStatus = false;
  }
}
