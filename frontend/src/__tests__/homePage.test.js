import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../utils/renderWithRouter';
import App from '../App';

describe('Página inicial', () => {
  it('1) Verifica se os links dos quatro exercícios estão presentes', () => {
    renderWithRouter(<App />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(4);
  });
});
