import { expect } from 'chai';
import fs from 'fs';
import path from 'path';
import Carro from '../garage/carro.model';
import Moto from '../garage/moto.model';

const DB_PATH = path.join(__dirname, '../../db/vehicles.json');

describe('1) Testa as funções relacionados aos automóveis', () => {
  it('1) Verifica se os dados de um carro são salvos corretamente', async () => {
    const previousData = fs.readFileSync(DB_PATH, 'utf-8');

    const carro = new Carro('modelo1', 2022, 4, 'marca1');
    await carro.salvarCarro();

    const response = JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));

    const expectedResponse = {
      carros: [{
        modelo: 'modelo1',
        anoDeFabricação: 2022,
        quantidadeDePortas: 4,
        marca: 'marca1',
      }],
      motos: [],
    };

    expect(response).to.be.eql(expectedResponse);

    fs.writeFileSync(DB_PATH, previousData);
  });

  it('2) Verifica se os dados de uma moto são salvos corretamente', async () => {
    const previousData = fs.readFileSync(DB_PATH, 'utf-8');

    const moto = new Moto('modelo1', 2022, 'marca1', 2);
    await moto.salvarMoto();

    const response = JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));

    const expectedResponse = {
      carros: [],
      motos: [{
        modelo: 'modelo1',
        anoDeFabricação: 2022,
        marca: 'marca1',
        passageiros: 2,
      }],
    };

    expect(response).to.be.eql(expectedResponse);

    fs.writeFileSync(DB_PATH, previousData);
  });
});
