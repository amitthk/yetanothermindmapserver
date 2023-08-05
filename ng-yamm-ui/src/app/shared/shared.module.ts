import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MindMapComponent } from './mind-map/mind-map.component';
import { AboutComponent } from './about/about.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AboutComponent,
    MindMapComponent
  ],
  exports: [],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
