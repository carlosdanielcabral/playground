import fs from 'fs/promises';
import path from 'path';
import Veiculo from './veiculo.interface';

const DB_PATH = path.join(__dirname, '../../db/vehicles.json');

class Carro implements Veiculo {
  modelo: string;

  anoDeFabricação: number;

  quantidadeDePortas: number = 2 || 4;

  marca: string;

  constructor(modelo: string, anoDeFabricação: number, quantidadeDePortas: number, marca: string) {
    this.modelo = modelo;
    this.anoDeFabricação = anoDeFabricação;
    this.quantidadeDePortas = quantidadeDePortas;
    this.marca = marca;
  }

  public async salvarCarro(): Promise<void | Error> {
    const {
      modelo, anoDeFabricação, quantidadeDePortas, marca,
    } = this;

    const car = {
      modelo, anoDeFabricação, quantidadeDePortas, marca,
    };

    const todosOsVeículos = await Carro.recuperarTodosOsCarros();

    todosOsVeículos.carros.push(car);

    return fs.writeFile(DB_PATH, JSON.stringify(todosOsVeículos));
  }

  static async recuperarTodosOsCarros(): Promise<any> {
    return JSON.parse(await fs.readFile(DB_PATH, 'utf-8'));
  }
}

export default Carro;
