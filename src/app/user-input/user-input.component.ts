import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();
  enteredInitial = signal('0');
  enteredAnnual = signal('0');
  enteredReturn = signal('5');
  enteredPeriod = signal('10');

  onSubmit() {
    console.log('Submitted!');
    this.calculate.emit({
      initialInvestment: +this.enteredInitial(),
      duration: +this.enteredPeriod(),
      annualInvestment: +this.enteredAnnual(),
      expectedReturn: +this.enteredReturn(),
    });
  }
}
