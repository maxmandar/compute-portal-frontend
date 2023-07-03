import { CurrencyWithCommasPipe } from './currency-with-commas.pipe';

describe('CurrencyWithCommasPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyWithCommasPipe();
    expect(pipe).toBeTruthy();
  });
});
