import { Demo2Component } from './demo2/demo2.component';
import { MenuComponent } from './menu/menu.component';
import { Demo1Component } from './demo1/demo1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : 'menu',component : MenuComponent, children : [
    {path:'demo1',component : Demo1Component},
    {path:'demo2',component : Demo2Component}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
