import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<{
    initialInvestment: number;
    duration: number;
    annualInvestment: number;
    expectedReturn: number;
  }>();
  enteredInitial = '0';
  enteredAnnual = '0';
  enteredReturn = '5';
  enteredPeriod = '10';
  formSubmitted = false;

  onSubmit() {
    console.log('Submitted!');
    this.calculate.emit({
      initialInvestment: +this.enteredInitial,
      duration: +this.enteredPeriod,
      annualInvestment: +this.enteredAnnual,
      expectedReturn: +this.enteredReturn,
    });
    this.formSubmitted = true;
  }
}
