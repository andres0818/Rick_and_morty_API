const axios = require('axios').default;

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com',
});

export const getApi = async (character = '') => {
  const res = await api.get(
    `https://rickandmortyapi.com/api/character?name=${character}`,
  );
  return res;
};
