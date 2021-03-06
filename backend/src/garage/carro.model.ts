import { promises as fs } from 'fs';
import path from 'path';
import { QuantidadeDePortas, Veiculo } from './veiculo.interface';

const DB_PATH = path.join(__dirname, '../../db/vehicles.json');

class Carro implements Veiculo {
  modelo: string;

  anoDeFabricação: number;

  quantidadeDePortas: QuantidadeDePortas;

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

    const carro = {
      modelo, anoDeFabricação, quantidadeDePortas, marca,
    };

    const todosOsVeículos = await Carro.recuperarTodosOsVeiculos();

    todosOsVeículos.carros.push(carro);

    return fs.writeFile(DB_PATH, JSON.stringify(todosOsVeículos));
  }

  static async recuperarTodosOsVeiculos() {
    return JSON.parse(await fs.readFile(DB_PATH, 'utf-8'));
  }
}

export default Carro;
