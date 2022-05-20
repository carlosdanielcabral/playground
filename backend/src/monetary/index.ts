const getChange = (purchasePrice: number, providedValue: number) => {
  const change = providedValue - purchasePrice;
  const ratio = (change / 100).toFixed(2);
  const [integer, decimal] = String(ratio).split('.');
  const billsQuantity = {
    '100': Number(integer),
    '10': Number(decimal.split('')[0]),
    '1': Number(decimal.split('')[1]),
  };
  const total = Object.values(billsQuantity)
      .reduce((acc, curr) => acc + curr, 0);
  return {total, billsQuantity};
};

export default getChange;
