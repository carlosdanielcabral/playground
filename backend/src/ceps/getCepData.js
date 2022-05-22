import { XMLHttpRequest } from 'xmlhttprequest';

const getCepData = (cep) => {
  const request = new XMLHttpRequest();

  request.open('GET', `https://viacep.com.br/ws/${cep}/json`, false);

  request.send();

  if (request.status === 200) {
    const object = JSON.parse(request.responseText);
    if (!object.erro) return object;
  }
  return ({ cep, erro: 'Não foi possível encontrar os dados referentes a esse cep' });
};

export default getCepData;
