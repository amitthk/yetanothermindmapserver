import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { MindMapCollaborationService } from './service/mind-map-collaboration.service';
import { CommonHttpService } from './service/common-http.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [HttpClientModule,MindMapCollaborationService,CommonHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
