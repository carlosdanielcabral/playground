import React, { useState } from 'react';
import api from '../services/api';
import './Palindrome.css';

function Palindrome() {
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');
  const [palindromes, setPalindromes] = useState([]);
  const [error, setError] = useState('');

  const getPalindromes = async (e: React.FormEvent) => {
    e.preventDefault();
    if (minValue > maxValue) {
      setError('O valor mínimo não pode ser maior que o valor máximo.');
    } else {
      try {
        const response = await api.get(`/palindrome?initialValue=${minValue}&finalValue=${maxValue}`);
        setPalindromes(response.data.palindromes);
        setError('');
      } catch (err) {
        setError('Ocorreu um erro! Tente novamente mais tarde.');
      }
    }
  };

  return (
    <div className="palindrome-page" data-testid="palindrome-page">
      <header>
        <h1>Palíndromos</h1>
      </header>

      <main>
        <blockquote>
          Palíndromo é uma palavra, frase ou número que permanece igual
          quando lida de trás para diante. Por extensão, palíndromo é
          qualquer série de elementos com simetria linear, ou seja, que
          apresenta a mesma sequência de unidades nos dois sentidos.
          <a target="_blank" href="https://pt.wikipedia.org/wiki/Pal%C3%ADndromo" rel="noreferrer">https://pt.wikipedia.org/wiki/Pal%C3%ADndromo</a>
        </blockquote>

        <h2>Selecione um intervalo para listar os palídromos:</h2>

        <form onSubmit={getPalindromes}>
          <label htmlFor="min-value">
            Valor mínimo
            <input
              id="min-value"
              onChange={(e) => setMinValue(e.target.value)}
              type="number"
              value={minValue}
              required
            />
          </label>

          <label htmlFor="max-value">
            Valor máximo
            <input
              id="max-value"
              onChange={(e) => setMaxValue(e.target.value)}
              type="number"
              value={maxValue}
              required
            />
          </label>

          <button type="submit">
            Ver palíndromos
          </button>

          <button
            className="clear"
            disabled={palindromes.length === 0}
            onClick={() => setPalindromes([])}
            type="button"
          >
            Limpar
          </button>

          {
            error && (
              <small className="error">
                {error}
              </small>
            )
          }
        </form>

        <section className="palindromes">
          {
            palindromes.length > 0 && palindromes.map((palindrome) => (
              <span className="palindrome" key={`palindrome-${palindrome}`}>
                {palindrome}
              </span>
            ))
          }
        </section>
      </main>
    </div>
  );
}

export default Palindrome;
