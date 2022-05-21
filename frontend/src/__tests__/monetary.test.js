import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../utils/renderWithRouter';
import Monetary from '../monetary/Monetary';

// jest.mock('axios');

describe('Página do Palíndromo', () => {
  it('1) Verifica se os palíndromos são gerados corretamente', async () => {
    renderWithRouter(<Monetary />);

    const purchaseValue = screen.getByTestId('purchase-value');
    userEvent.type(purchaseValue, '121');

    const providedValue = screen.getByTestId('provided-value');
    userEvent.type(providedValue, '253');

    expect(purchaseValue).toHaveValue(121);
    expect(providedValue).toHaveValue(253);

    const submitButton = screen.getByTestId('submit');

    userEvent.click(submitButton);

    const total = await screen.findByTestId('total');

    expect(total.innerHTML).toBe('6');
  });
});
