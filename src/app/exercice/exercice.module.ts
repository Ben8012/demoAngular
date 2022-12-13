import { FormInputComponent } from './exercice2/form-input/form-input.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { Exercice1Component } from './exercice1/exercice1.component';
import { MenuComponent } from './menu/menu.component';
import { Exercice2Component } from './exercice2/exercice2.component';


@NgModule({
  declarations: [
    Exercice1Component,
    MenuComponent,
    Exercice2Component,
    FormInputComponent
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    FormsModule
  ]
})
export class ExerciceModule { }
