import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { getMovieSave, deleteMovie } from '../../utils/storage';
import FavoriteItem from '../../components/FavoriteItem';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { ContainerAll, ListMovies } from './styles';

export default function Movies() {
  const [movies, setMovies] = useState([]);

  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    let isActive = true;

    async function getFavoriteMovies() {
      const result = await getMovieSave('@primeReact');

      if (isActive) {
        setMovies(result)
      }
    }

    if (isActive) {
      getFavoriteMovies();
    }

    return () => {
      isActive = false;
    }

  }, [isFocused])

  async function handleDelete(id) {
    const result = await deleteMovie(id);
    setMovies(result);
  }

  function navigateDetailPage(item) {
    navigation.navigate('Details', { id: item.id })
  }

  return (
    <ContainerAll>
      <Header title="Meus filmes" />

      <ListMovies
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        data={movies}
        renderItem={({ item }) => <FavoriteItem data={item} deleteMovie={handleDelete} navigatePage={() => navigateDetailPage(item)} />}
      />
    </ContainerAll>
  );
}