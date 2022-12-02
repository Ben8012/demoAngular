import { DemoModule } from './demo/demo.module';
import { ExerciceModule } from './exercice/exercice.module';
import { NavComponent } from './nav/nav.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExerciceModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
