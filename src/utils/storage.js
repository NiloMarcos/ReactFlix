import AsyncStorage from '@react-native-async-storage/async-storage';

// Pegando filme
export async function getMovieSave(key){
  const myMovie = await AsyncStorage.getItem(key);

  let moviesSave = JSON.parse(myMovie) || [];
  return moviesSave;
}


// Salvando filme na lista
export async function saveMovie(key, newMovie){
  let moviesStorage = await getMovieSave(key)

  const hasMovie = moviesStorage.some( item => item.id === newMovie.id);

  if(hasMovie) {
    console.log('Esse filme ja existe na sua lista');
    return;
  }

  moviesStorage.push(newMovie);


  await AsyncStorage.setItem(key, JSON.stringify(moviesStorage));
  console.log('Filme salvo com sucesso');
}

// Deletando algum filme
export async function deleteMovie(id){
  let moviesStorage = await getMovieSave('@primeReact');

  let myMovies = moviesStorage.filter( item => {
    return(item.id !== id);
  })

  await AsyncStorage.setItem('@primeReact', JSON.stringify(myMovies));
  console.log('Filme deletado com sucesso');
  return myMovies;
}

// Filtrar algum filme se ja esta salvo
export async function hasMovie(movie){
  let moviesStorage = await getMovieSave('@primeReact');

  const hasMovie = moviesStorage.find( item => item.id === movie.id);

  if(hasMovie){
    return true;
  }

  return false;
}