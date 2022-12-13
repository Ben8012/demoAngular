import { Component } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component {
  maVariable : string = "coucou"
  maVariableClick : string ="pas click"
  testVariable:string =""

  isActive : boolean = false

  maMethode(){
    if(this.maVariableClick == "pas click"){
      this.maVariableClick="click"
    }
    else{
      this.maVariableClick="pas click"
    }
  }

  reversIsActive(){
    this.isActive = !this.isActive
    this.testVariable=""
  }

  testIsActive(){
    this.testVariable = "le boutton est actif"
  }
}
