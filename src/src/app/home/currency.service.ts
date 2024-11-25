import { Injectable } from '@angular/core';

type Currency = 'MXN' | 'USD' | 'EUR';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private rates: Record<Currency, number> = {
    MXN: 1,       
    USD: 18.00,   
    EUR: 20.00    
  };

  convert(amount: number, from: Currency, to: Currency): number {
    if (from === to) return amount;

    const amountInMXN = amount * this.rates[from];
    
    return amountInMXN / this.rates[to];
  }
}


