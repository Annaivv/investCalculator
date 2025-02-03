import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  enteredInitial = '0';
  enteredAnnual = '0';
  enteredReturn = '5';
  enteredPeriod = '10';
  formSubmitted = false;

  onSubmit() {
    console.log('Submitted!');
    console.log(this.enteredInitial);
    this.formSubmitted = true;
  }
}
