import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { Exercice1Component } from './exercice1/exercice1.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    Exercice1Component,
    MenuComponent
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule
  ]
})
export class ExerciceModule { }
