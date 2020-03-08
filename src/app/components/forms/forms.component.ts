import { Component } from '@angular/core';
import { User } from '../../user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './forms.component.html'
})
export class FormsComponent {
  title = 'formsRouter';
  FormsModule
  userModel = new User('', '', null, '', '', '', '');
  submitData(){
    window.location.replace('/kendo');
  }
}
