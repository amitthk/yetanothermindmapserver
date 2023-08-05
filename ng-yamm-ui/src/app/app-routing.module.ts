import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MindMapComponent } from "./shared/mind-map/mind-map.component";
import { AboutComponent } from "./shared/about/about.component";

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' }, // Example for the default (home) route
  { path: 'index', component: MindMapComponent }, // Example for the default (home) route
  { path: 'about', component: AboutComponent }, // Example for '/about' route
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
