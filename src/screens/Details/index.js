import React, {useState, useEffect} from 'react';
import { ScrollView, Modal } from 'react-native'
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import Stars from 'react-native-stars';
import api, {key} from '../../services/api';
import { ContainerAll, Header, HeaderButton, Banner, ButtonLink, Title, ContentArea, Rate, ListGenres, TitleDescription, Description} from './styles';
import Genres from '../../components/Genres';
import ModalLink from '../../components/ModalLink';

import { saveMovie, hasMovie, deleteMovie } from '../../utils/storage';

export default function Details() {
  const navigation = useNavigation();
  const route = useRoute();
  const [openLink, setOpenLink] = useState(false);
  const [movie, setMovie] = useState({});
  const [favoriteMovies, setFavoriteMovies] = useState(false);

  useEffect(() => {
    let isActive = true;

    async function loadMovie(){
      const response = await api.get(`/movie/${route.params?.id}`, {
        params: {
          api_key: key,
          language: 'pt-BR',
        }
      })
      .catch((error) => {
        console.error(error);
      });

      if(isActive){
        setMovie(response.data);

        const isFavorite = await hasMovie(response.data);
        setFavoriteMovies(isFavorite);
      }
    }

    if(isActive){
      loadMovie();
    }

    return () => {
      isActive = false;
    }
  },[]);

  async function handleFavoriteMovie(movie){
    if(favoriteMovies){
      await deleteMovie(movie.id);
      setFavoriteMovies(false);
      alert('Filme removido da sua lista')
    } else {
      await saveMovie('@primeReact', movie)
      setFavoriteMovies(true)
      alert('Filme salvo com sucesso');
    }
  }

  return (
    <ContainerAll>
      <Header>
        <HeaderButton activeOpacity={0.7} onPress={() => navigation.goBack() }>
          <Feather name="arrow-left" size={28} color="#FFF" />
        </HeaderButton>
        <HeaderButton onPress={() => handleFavoriteMovie(movie)}>
          { favoriteMovies ? (
            <Ionicons name="bookmark" size={28} color="#FFF" />
          ) : (
            <Ionicons name="bookmark-outline" size={28} color="#FFF" />
          )}
        </HeaderButton>
      </Header>

      <Banner
        resizeMethod="resize"
        source={{ uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}` }}
      />

      <ButtonLink onPress={() => setOpenLink(true)}>
        <Feather name="link" size={24} color="#FFF"/>
      </ButtonLink>

      <Title numberOfLines={1}>{movie.title}</Title>

      <ContentArea>
        <Stars 
          default={movie.vote_average}
          count={10}
          half={true}
          starSize={20}
          fullStar={ <Ionicons name="md-star" size={24} color="#e7a74e"/> }
          emptyStar={ <Ionicons name="md-star-outline" size={24} color="#e7a74e"/> }
          halfStar={ <Ionicons name="md-star-half" size={24} color="#e7a74e"/> }
          disabled={true}
        />
        <Rate>{movie.vote_average}/10</Rate>
      </ContentArea>

      <ListGenres 
        data={movie?.genres}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => <Genres data={item} />}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <TitleDescription>Descri????o</TitleDescription>
        <Description>{movie?.overview}</Description>
      </ScrollView>

      <Modal animationType="slide" transparent={true}  visible={openLink} >
        <ModalLink 
          link={movie?.homepage}
          title={movie?.title}
          closeModal={() => setOpenLink(false)}
        />
      </Modal>
    </ContainerAll>
  );
}