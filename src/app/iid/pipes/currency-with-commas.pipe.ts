import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyWithCommas'
})
export class CurrencyWithCommasPipe implements PipeTransform {
  transform(value: number): string {
    const formatter = new Intl.NumberFormat('en-SG', {
      style: 'currency',
      currency: 'SGD'
    });
    return formatter.format(value);
  }
}
