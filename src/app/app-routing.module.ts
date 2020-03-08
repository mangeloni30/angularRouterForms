import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './components/mainApp/app.component';
import { FormsComponent } from './components/forms/forms.component';
import { KendoComponent } from './components/kendoGrid/kendo.component';
const routes: Routes = [
  {path: '', redirectTo: '/forms', pathMatch: 'full'},
  {path: 'forms', component: FormsComponent},
  {path: 'kendo', component: KendoComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AppComponent, FormsComponent, KendoComponent];
