import React, { useState } from 'react';
import api from '../services/api';
import './Monetary.css';

function Monetary() {
  const [purchaseValue, setPurchaseValue] = useState('');
  const [providedValue, setProvidedValue] = useState('');
  // const [palindromes, setPalindromes] = useState([]);

  const getChange = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.get(`/monetary?purchaseValue=${purchaseValue}&providedValue=${providedValue}`);
      console.log(response);
      // setPalindromes(response.data.palindromes);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="monetary-page">
      <header>
        <h1>Caixa</h1>
      </header>

      <main>
        <h2>Selecione um intervalo para listar os palídromos:</h2>

        <form onSubmit={getChange}>
          <label htmlFor="purchase-value">
            Valor da compra
            <input
              id="purchase-value"
              onChange={(e) => setPurchaseValue(e.target.value)}
              placeholder="0"
              type="number"
              value={purchaseValue}
            />
          </label>

          <label htmlFor="provided-value">
            Valor do pagamento
            <input
              id="provided-value"
              onChange={(e) => setProvidedValue(e.target.value)}
              placeholder="0"
              type="number"
              value={providedValue}
            />
          </label>

          <button type="submit">
            Pagar
          </button>

          {/* <button
            className="clear"
            disabled={palindromes.length === 0}
            onClick={() => setPalindromes([])}
            type="button"
          >
            Limpar
          </button> */}
        </form>

        {/* <section className="palindromes">
          {
            palindromes.length > 0 && palindromes.map((palindrome) => (
              <span className="palindrome" key={`palindrome-${palindrome}`}>
                {palindrome}
              </span>
            ))
          }
        </section> */}
      </main>
    </div>
  );
}

export default Monetary;
