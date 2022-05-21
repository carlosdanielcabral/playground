import React, { useState } from 'react';
import api from '../services/api';
import './Monetary.css';

function Monetary() {
  const [purchaseValue, setPurchaseValue] = useState('');
  const [providedValue, setProvidedValue] = useState('');
  const [change, setChange] = useState({
    total: 0,
    billsQuantity: {
      100: 0,
      10: 0,
      1: 0,
    },
  });
  const [hasChange, setHasChange] = useState(false);
  const [error, setError] = useState('');

  const getChange = async (e: React.FormEvent) => {
    e.preventDefault();
    if (Number(purchaseValue) > Number(providedValue)) {
      setError('O valor da compra é maior que o valor fornecido.');
    } else {
      try {
        const response = await api.get(`/monetary?purchaseValue=${purchaseValue}&providedValue=${providedValue}`);
        setChange(response.data.change);
        setHasChange(true);
        setError('');
        // setPalindromes(response.data.palindromes);
      } catch (err) {
        setError('Ocorreu um erro! Tente novamente mais tarde.');
      }
    }
  };

  return (
    <div className="monetary-page">
      {
        hasChange && (
          <>
            <div className="blur" />
            <div className="change">
              <button
                className="close"
                onClick={() => setHasChange(false)}
                type="button"
              >
                Fechar
              </button>
              <span className="total">
                <h2>Quantidade de notas de troco</h2>
                <p>{change.total}</p>
              </span>

              <table>
                <tr>
                  <th>Notas</th>
                  {
                    Object.keys(change.billsQuantity).map((bill) => (
                      <th key={`th-bill-${bill}`}>{bill}</th>
                    ))
                  }
                </tr>
                <tr>
                  <td>Quantidade</td>
                  {
                    Object.values(change.billsQuantity).map((quantity) => (
                      <td key={`td-bill-quantity-${quantity}`}>
                        {quantity}
                      </td>
                    ))
                  }
                </tr>
              </table>
            </div>
          </>
        )
      }

      <main>
        <h1>Caixa</h1>
        <form onSubmit={getChange}>
          <label htmlFor="purchase-value">
            Valor da compra
            <input
              className="default-input"
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
              className="default-input"
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

          {
            error && (
              <small className="error">
                {error}
              </small>
            )
          }

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
