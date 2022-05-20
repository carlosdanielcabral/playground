import fs from 'fs/promises';
import path from 'path';
import Veiculo from './veiculo.interface';

const DB_PATH = path.join(__dirname, '../../db/vehicles.json');

class Moto implements Veiculo {
  modelo: string;

  anoDeFabricação: number;

  quantidadeDePortas: number = 0;

  marca: string;

  rodas: number = 2;

  passageiros: number = 1 || 2;

  constructor(
    modelo: string,
    anoDeFabricação: number,
    marca: string,
    passageiros: number,
  ) {
    this.modelo = modelo;
    this.anoDeFabricação = anoDeFabricação;
    this.marca = marca;
    this.passageiros = passageiros;
  }

  public async salvarMoto(): Promise<void | Error> {
    const {
      modelo, anoDeFabricação, marca, passageiros,
    } = this;

    const moto = {
      modelo, anoDeFabricação, marca, passageiros,
    };

    const todosOsVeículos = await Moto.recuperarTodosOsVeiculos();

    todosOsVeículos.motos.push(moto);

    return fs.writeFile(DB_PATH, JSON.stringify(todosOsVeículos));
  }

  static async recuperarTodosOsVeiculos(): Promise<any> {
    return JSON.parse(await fs.readFile(DB_PATH, 'utf-8'));
  }
}

export default Moto;
