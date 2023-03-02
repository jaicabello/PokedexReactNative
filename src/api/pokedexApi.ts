import axios from 'axios';
import {GET_POKEMONS} from '../../env.json';

class PokeApi {
  async getPokemons() {
    return axios({
      method: 'get',
      url: GET_POKEMONS,
    }).then(function (response) {
      return response.data;
    });
  }
}
export default new PokeApi();
