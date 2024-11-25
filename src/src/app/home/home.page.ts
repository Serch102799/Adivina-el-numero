import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyService } from 'src/app/home/currency.service';
import { IonicSharedModule } from 'src/app/home/ionic.module'; 

type Currency = 'MXN' | 'USD' | 'EUR'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonicSharedModule,
    FormsModule
  ],
})
export class HomePage {
  amount: number | null = null;
  fromCurrency: Currency = 'MXN'; 
  toCurrency: Currency = 'MXN';   
  result: number | null = null;

  constructor(private currencyService: CurrencyService) {}

  convert() {
    if (this.amount === null || this.amount <= 0) {
      alert('Por favor, introduzca una cantidad válida.');
      return;
    }
    this.result = this.currencyService.convert(this.amount, this.fromCurrency, this.toCurrency);
  }
}
