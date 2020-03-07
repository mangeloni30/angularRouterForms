import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { KendoComponent } from './kendo.component';
const routes: Routes = [
  // {path: '', component: AppComponent},
  {path: 'kendo', component: KendoComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AppComponent, KendoComponent];
