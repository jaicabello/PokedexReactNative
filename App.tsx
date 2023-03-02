import React, {useEffect, useCallback} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import PokeApi from './src/api/pokedexApi';

const App = () => {
  const fetchPokemons = useCallback(async () => {
    const pokemons = await PokeApi.getPokemons();
    console.log(pokemons);
  }, []);
  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);
  return (
    <SafeAreaView>
      <Text>Pokédex!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
