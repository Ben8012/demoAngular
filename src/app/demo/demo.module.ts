import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { Demo1Component } from './demo1/demo1.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { Demo2Component } from './demo2/demo2.component';


@NgModule({
  declarations: [
    Demo1Component,
    MenuComponent,
    Demo2Component
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    FormsModule,
  ]
})
export class DemoModule { }
