import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  enteredInitial = signal('0');
  enteredAnnual = signal('0');
  enteredReturn = signal('5');
  enteredPeriod = signal('10');

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
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
