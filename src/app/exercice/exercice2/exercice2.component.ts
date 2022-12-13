import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.scss']
})
export class Exercice2Component {

private _id : number = 0;
 private _userName : string ="nom";
 private _userPassword : string ="1234";
 private _userAdresse : string ="adresse";

 get userName(): string {
  return this._userName;
 }
 set userName(value : string){
    this._userName =value
 }

 get userPassword(): string {
  return this._userPassword;
 }
 set userPassword(value : string){
    this._userPassword =value
 }

 get userAdresse(): string {
  return this._userAdresse;
 }
 set userAdresse(value : string){
    this._userAdresse =value
 }

  user: { name: string, password: string, adresse: string } = {
    name: this.userName,
    password: this.userPassword,
    adresse: this.userAdresse
  };


  users : any = [];

  doUpdate: boolean = false;


  handlerSubmit(){
    this.doUpdate = false;
    this.users.forEach((u : any) => {
      if(u.id == this._id){
        this.doUpdate = true;
        this.user.name = this.user.name;
        this.user.adresse = this.user.adresse;
        this.user.password = this.user.password;
      }
    });

    if(!this.doUpdate){
      this._id ++;
      this.users.push(new User(this._id,this.user.name,this.user.password,this.user.adresse));

    }

  }

  updateUser(user: User){
      this._id = user.id
      this.user.name = user.name;
      this.user.adresse = user.adresse;
      this.user.password = user.password;
  }
}

export class User{
  public id : number;
  public name: string;
  public password: string;
  public adresse : string;
  constructor(id : number, name : string, password : string, adresse : string){
      this.id = id;
      this.name = name;
      this.password = password;
      this.adresse = adresse;
  }
}
