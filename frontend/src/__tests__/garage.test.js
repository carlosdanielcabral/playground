import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../utils/renderWithRouter';
import Garage from '../garage/Garage';

// jest.mock('axios');

describe('Página do Palíndromo', () => {
  it('1) Verifica se os palíndromos são gerados corretamente', async () => {
    renderWithRouter(<Garage />);

    const brand = screen.getByTestId('brand');
    expect(brand).toBeInTheDocument();

    const model = screen.getByTestId('model');
    expect(model).toBeInTheDocument();

    const manufacturingYear = screen.getByTestId('manufacturing-year');
    expect(manufacturingYear).toBeInTheDocument();

    const car = screen.getByTestId('car');
    expect(car).toBeInTheDocument();

    const doorQuantity = screen.getByTestId('door-quantity');
    expect(doorQuantity).toBeInTheDocument();

    const motorcycle = screen.getByTestId('motorcycle');
    expect(motorcycle).toBeInTheDocument();

    userEvent.click(motorcycle);

    const passengerQuantity = screen.getByTestId('passenger-quantity');
    expect(passengerQuantity).toBeInTheDocument();
  });
});
