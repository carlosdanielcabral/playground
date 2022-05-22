enum QuantidadeDePortas {
  duas = 2,
  quatro = 4
}

interface Veiculo {
  modelo: string,
  anoDeFabricação: number,
  quantidadeDePortas: QuantidadeDePortas,
  marca: string,
}

export { QuantidadeDePortas, Veiculo };
