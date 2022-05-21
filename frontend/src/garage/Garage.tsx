import React, { useState } from 'react';
import api from '../services/api';
import './Garage.css';

function Garage() {
  const [model, setModel] = useState('');
  const [brand, setBrand] = useState('');
  const [manufacturingYear, setManufacturingYear] = useState('');
  const [doorQuantity, setDoorQuantity] = useState(0);
  const [passengerQuantity, setPassengerQuantity] = useState(0);
  const [type, setType] = useState('car');
  const [saved, setSaved] = useState(false);

  const saveVehicle = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (type === 'car') {
        await api.post('/garage/car', {
          model, brand, manufacturingYear, doorQuantity,
        });
      } else {
        await api.post('/garage/motorcyle', {
          model, brand, manufacturingYear, passengerQuantity,
        });
      }
      setSaved(true);
      // setPalindromes(response.data.palindromes);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="garage-page">
      <main>
        <section className="left" />

        <form onSubmit={saveVehicle}>
          <label htmlFor="brand">
            Marca
            <input
              data-testid="brand"
              id="brand"
              onChange={(e) => setBrand(e.target.value)}
              placeholder="Digite aqui"
              type="text"
              value={brand}
              required
            />
          </label>

          <label htmlFor="model">
            Modelo
            <input
              data-testid="model"
              id="model"
              onChange={(e) => setModel(e.target.value)}
              placeholder="Digite aqui"
              type="text"
              value={model}
              required
            />
          </label>

          <label htmlFor="manufacturing-year">
            Ano de fabricação
            <input
              data-testid="manufacturing-year"
              id="provided-value"
              onChange={(e) => setManufacturingYear(e.target.value)}
              placeholder="Digite aqui"
              type="number"
              value={manufacturingYear}
              required
            />
          </label>

          <fieldset>
            <legend>Tipo de veículo:</legend>
            <label htmlFor="car">
              Carro
              <input
                data-testid="car"
                type="radio"
                name="vehicle"
                id="car"
                onChange={() => setType('car')}
                defaultChecked
              />
            </label>
            <label htmlFor="motorcycle">
              Moto
              <input
                data-testid="motorcycle"
                type="radio"
                name="vehicle"
                id="motorcycle"
                onChange={() => setType('moto')}
              />
            </label>
          </fieldset>

          {
            type === 'car'
              ? (
                <fieldset>
                  <legend>Quantidade de portas</legend>
                  <label htmlFor="door-quantity-2">
                    2
                    <input
                      data-testid="door-quantity"
                      type="radio"
                      name="door-quantity"
                      id="door-quantity-2"
                      onSelect={() => setDoorQuantity(2)}
                      defaultChecked
                    />
                  </label>
                  <label htmlFor="door-quantity-4">
                    4
                    <input
                      type="radio"
                      name="door-quantity"
                      id="door-quantity-4"
                      onSelect={() => setDoorQuantity(4)}
                    />
                  </label>
                </fieldset>
              )
              : (
                <fieldset>
                  <legend>Número de passageiros</legend>
                  <label htmlFor="passenger-quantity-1">
                    1
                    <input
                      data-testid="passenger-quantity"
                      type="radio"
                      name="passenger-quantity"
                      id="passenger-quantity-1"
                      onSelect={() => setPassengerQuantity(1)}
                      defaultChecked
                    />
                  </label>

                  <label htmlFor="passenger-quantity-2">
                    2
                    <input
                      type="radio"
                      name="passenger-quantity"
                      id="passenger-quantity-2"
                      onSelect={() => setPassengerQuantity(2)}
                      defaultChecked
                    />
                  </label>

                </fieldset>
              )
          }

          <button type="submit">
            Salvar
          </button>

          {
            saved && 'Salvo!'
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

export default Garage;
