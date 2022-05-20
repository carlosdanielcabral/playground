import fs from 'fs/promises';
import Veiculo from './veiculo.interface';

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

    return fs.writeFile('../../db/vehicles.json', todosOsVeículos);
  }

  static async recuperarTodosOsCarros(): Promise<any> {
    return JSON.parse(await fs.readFile('../../db/vehicles.json', 'utf-8'));
  }
}

export default Carro;
