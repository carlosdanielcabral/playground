import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../utils/renderWithRouter';
import Palindrome from '../palindrome/Palindrome';

// jest.mock('axios');

describe('Página do Palíndromo', () => {
  it('1) Verifica se os palíndromos são gerados corretamente', async () => {
    renderWithRouter(<Palindrome />);

    const minValueInput = screen.getByTestId('min-value');
    userEvent.type(minValueInput, '10');

    const maxValueInput = screen.getByTestId('max-value');
    userEvent.type(maxValueInput, '100');

    expect(minValueInput).toHaveValue(10);
    expect(maxValueInput).toHaveValue(100);

    const submitButton = screen.getByTestId('submit');

    userEvent.click(submitButton);

    const palindromes = await screen.findAllByTestId('palindrome');

    expect(palindromes).toHaveLength(9);

    // await waitFor(() => {
    //   // axios.get.mockImplementationOnce(Promise.resolve({
    //   //   data: {
    //   //     palindromes: [11, 22, 33, 44, 55, 66, 77, 88, 99],
    //   //   },
    //   // }));

    //   // expect(axios).toBeCalled();
    // });
  });
});
