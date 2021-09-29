import React, { useState, useEffect } from "react";
import { ScrollView, ActivityIndicator } from 'react-native';
import { Feather } from "@expo/vector-icons";
import Header from "../../components/Header";
import SliderItem from '../../components/SliderItem';
import { ContainerAll, SearchContainer, Input, SearchButton, Title, BannerButton, Banner, SliderMove } from "./styles";

import api, { key } from '../../services/api';
import { getListMovies, randomBanner } from '../../utils/movie';

import { useNavigation } from '@react-navigation/native';

export default function Dashboard() {
  const [nowMovie, setNowMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [bannerMovie, setBannerMovie] = useState({});
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    let isActive = true;
    const ac = new AbortController();

    async function getMovie() {
      const [nowData, popularData, topData] = await Promise.all([
        api.get(`movie/now_playing`, {
          params: {
            api_key: key,
            language: 'pt-BR',
            page: 1
          }
        }),
        api.get(`movie/popular`, {
          params: {
            api_key: key,
            language: 'pt-BR',
            page: 1
          }
        }),
        api.get(`movie/top_rated`, {
          params: {
            api_key: key,
            language: 'pt-BR',
            page: 1
          }
        }),

      ])

      if(isActive){
        const nowList = getListMovies(15, nowData.data.results)
        const popularList = getListMovies(5, popularData.data.results)
        const topList = getListMovies(5, topData.data.results)
  
        setBannerMovie(nowData.data.results[randomBanner(nowData.data.results)]);

        setNowMovies(nowList);
        setPopularMovies(popularList);
        setTopMovies(topList);
  
        setLoading(false);
      }

    }
    getMovie()
    
    return () => {
      isActive = false;
      ac.abort();
    }
  }, []);

  function navigateDetailsPage(item){
    navigation.navigate('Details', {id: item.id});
  }

  if(loading){
    return(
      <ContainerAll>
        <ActivityIndicator size={30} color="#FFF" />
      </ContainerAll>
    );
  }

  return (
    <ContainerAll>
      <Header title="React Prime" />

      <SearchContainer>
        <Input placeholder="Ex: Vingadores" placeholderTextColor="#DDD" />

        <SearchButton>
          <Feather name="search" size={30} color="#FFF" />
        </SearchButton>
      </SearchContainer>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Em cartaz</Title>

        <BannerButton activeOpacity={0.9} onPress={() => navigateDetailsPage(bannerMovie)}>
          <Banner
            resizeMethod="resize"
            source={{ uri: `https://image.tmdb.org/t/p/original/${bannerMovie.poster_path}` }} />
        </BannerButton>

        <SliderMove
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={nowMovie}
          renderItem={({ item }) => <SliderItem data={item} navigatePage={ () => navigateDetailsPage(item)} /> }
          keyExtractor={(item) => String(item.id)}
        />

        <Title>Populares</Title>
        <SliderMove
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={popularMovies}
          renderItem={({ item }) => <SliderItem data={item} navigatePage={ () => navigateDetailsPage(item)} />}
          keyExtractor={(item) => String(item.id)}
        />

        <Title>Mais Votados</Title>
        <SliderMove
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={topMovies}
          renderItem={({ item }) => <SliderItem data={item} navigatePage={ () => navigateDetailsPage(item)} />}
          keyExtractor={(item) => String(item.id)}
        />
      </ScrollView>
    </ContainerAll>


  );
}
