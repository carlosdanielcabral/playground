import { expect } from 'chai';
import getPalindrome from '../palindrome/getPalindrome';

describe('1) Testa o retorno da função getPalindrome', () => {
  it('Verifica se o retorno é um array com palindromos', () => {
    const response = getPalindrome(10, 100);
    const expectResponse = [11, 22, 33, 44, 55, 66, 77, 88, 99];
    expect(response).to.be.eql(expectResponse);
  });
});
