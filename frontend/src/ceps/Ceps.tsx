import React, { useState } from 'react';
// import api from '../services/api';
import './Ceps.css';

function Ceps() {
  const [cep1, setCep1] = useState('');
  const [cep2, setCep2] = useState('');
  const [cep3, setCep3] = useState('');
  const [cep4, setCep4] = useState('');
  const [cep5, setCep5] = useState('');
  const [data, setData] = useState([] as {}[]);
  const [error, setError] = useState('');

  const requestCeps = (e: React.FormEvent) => {
    e.preventDefault();
    const ceps = [cep1, cep2, cep3, cep4, cep5];
    const cepData = [];
    for (let i = 0; i < ceps.length; i += 1) {
      const cep = ceps[i];
      if (cep.length !== 8) {
        setError('Verifique se os CEPs digitados são válidos!');
        setData([]);
        break;
      }
      const request = new XMLHttpRequest();

      request.open('GET', `https://viacep.com.br/ws/${cep}/json`, false);

      request.send();

      if (request.status === 200) {
        const object = JSON.parse(request.responseText);
        if (!object.erro) cepData.push(object);
        cepData.push({ cep, erro: 'Não foi possível encontrar os dados referentes a esse cep' });
      }
    }
    setData(cepData);
  };

  return (
    <div className="ceps-page">
      <header>
        <h1>CEPs</h1>
      </header>
      <main>
        <div>
          {
            data.length === 5 && (
            <div className="card">
              <button
                className="close"
                onClick={() => setData([])}
                type="button"
              >
                Fechar
              </button>
              { data.map((value: any) => (
                <div className="cep-data">
                  {Object.keys(value).map((key) => (
                    <div className="data">
                      <span>{key}</span>
                      <span>{value[key]}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            )
          }
        </div>
        <section className="left" />
        <form onSubmit={requestCeps}>
          <label htmlFor="cep1">
            CEP 1
            <input
              className="default-input"
              id="cep1"
              onChange={(e) => setCep1(e.target.value)}
              type="number"
              value={cep1}
              required
            />
          </label>

          <label htmlFor="cep2">
            CEP 2
            <input
              className="default-input"
              id="cep2"
              onChange={(e) => setCep2(e.target.value)}
              type="number"
              value={cep2}
              required
            />
          </label>

          <label htmlFor="cep3">
            CEP 3
            <input
              className="default-input"
              id="cep3"
              onChange={(e) => setCep3(e.target.value)}
              type="number"
              value={cep3}
              required
            />
          </label>

          <label htmlFor="cep4">
            CEP 4
            <input
              className="default-input"
              id="cep4"
              onChange={(e) => setCep4(e.target.value)}
              type="number"
              value={cep4}
              required
            />
          </label>

          <label htmlFor="cep5">
            CEP 5
            <input
              className="default-input"
              id="cep5"
              onChange={(e) => setCep5(e.target.value)}
              type="number"
              value={cep5}
              required
            />
          </label>

          <button type="submit">
            Request
          </button>
          {
            error && (
              <small className="error">
                {error}
              </small>
            )
          }
        </form>
      </main>
    </div>
  );
}

export default Ceps;