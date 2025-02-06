import { Component, computed, inject } from '@angular/core';

import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-results',
  standalone: false,
  templateUrl: './results.component.html',
  styleUrl: './results.component.css',
})
export class ResultsComponent {
  private investmentService = inject(InvestmentService);

  results = computed(() => this.investmentService.resultData());
}
