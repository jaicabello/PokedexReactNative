import axios from 'axios';

// https://pokeapi.co/api/v2 baseURL pokemon/?limit=100&offset=0
const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export default pokeApi;
