import { expect } from 'chai';
import getChange from '../monetary/getChange';

describe('1) Testa o retorno da função getChange', () => {
  it('Verifica se o retorno é um objeto com as propriedades corretas', () => {
    const response = getChange(121, 253);
    const expectResponse = {
      total: 6,
      billsQuantity: {
        1: 2,
        10: 3,
        100: 1,
      },
    };
    expect(response).to.be.eql(expectResponse);
  });
});
