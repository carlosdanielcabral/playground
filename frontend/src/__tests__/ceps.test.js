import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../utils/renderWithRouter';
import Ceps from '../ceps/Ceps';

describe('Página do Palíndromo', () => {
  jest.setTimeout(30000);
  it('1) Verifica se os palíndromos são gerados corretamente', async () => {
    renderWithRouter(<Ceps />);

    const ceps = ['30190090', '88865000', '69830000', '46130000', '76710000'];

    const cepsInput = screen.getAllByTestId('cep-input');

    for (let i = 0; i < cepsInput.length; i += 1) {
      userEvent.type(cepsInput[i], ceps[i]);
    }

    cepsInput.forEach((cep, index) => {
      expect(cep).toHaveValue(Number(ceps[index]));
    });
  });
});
