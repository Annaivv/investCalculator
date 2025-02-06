import { Component, output, signal } from '@angular/core';
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
  calculate = output<InvestmentInput>();
  enteredInitial = signal('0');
  enteredAnnual = signal('0');
  enteredReturn = signal('5');
  enteredPeriod = signal('10');

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitial(),
      duration: +this.enteredPeriod(),
      annualInvestment: +this.enteredAnnual(),
      expectedReturn: +this.enteredReturn(),
    });
    this.enteredInitial.set('0');
    this.enteredAnnual.set('0');
    this.enteredReturn.set('5');
    this.enteredPeriod.set('10');
  }
}
