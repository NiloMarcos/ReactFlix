import React, {useState, useEffect} from 'react';
import api, {key} from '../../services/api';
import {useNavigation, useRoute} from '@react-navigation/native';
import { ContainerAll, ListMovies } from './styles';
import SearchItem from '../../components/SearchItem';

export default function Search(){
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
    
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    let isActive = true;
    
    async function getSearchMovie(){
      const response = await api.get(`/search/movie`, {
        params: {
          query: route.params?.name,
          api_key: key,
          language: 'pt-BR',
          page: 1,
        }
      })

      if(isActive){
        setMovie(response.data.results);
        console.log(response.data.results);
        setLoading(false)
      }
    }
    
    if(isActive){
      getSearchMovie();
    }

    return () => {
      isActive = false;
    }
  },[]);

  function navigateDetailPage(item){
    navigation.navigate('Details', {id: item.id});
  }

  if(loading){
    return(
      <ContainerAll></ContainerAll>
    );
  }

  return(
    <ContainerAll>
      <ListMovies 
        data={movie}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <SearchItem data={item} navigatePage={() => navigateDetailPage(item)}/>}
      />
    </ContainerAll>
  )
}