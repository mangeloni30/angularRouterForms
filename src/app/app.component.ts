import { Component } from '@angular/core';
import { User } from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'formsRouter';
  userModel = new User('', '', null, '', '', '');
  submitData(){
    window.location.replace('/kendo');
  }
}
