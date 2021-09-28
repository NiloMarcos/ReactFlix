import React, { useState, useEffect } from "react";
import { ScrollView } from 'react-native';
import { Feather } from "@expo/vector-icons";
import Header from "../../components/Header";
import SliderItem from '../../components/SliderItem';
import { ContainerAll, SearchContainer, Input, SearchButton, Title, BannerButton, Banner, SliderMove } from "./styles";

import api, {key} from '../../services/api';

export default function Dashboard() {
  const [nowMovie, setNowMovie] = useState([]);

  useEffect(() => {
    let isActive = true;
    async function getMovie(){
      // const response = await api.get(`movie/now_playing`, {
      //   params: {
      //     api_key: key,
      //     language: 'pt-BR',
      //     page: 1
      //   }
      // })

        const [ nowData, popularData, topData ] = await Promise.all([
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
      console.log(topData.data.results);
    }

    getMovie()
  },[]);

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

        <BannerButton activeOpacity={0.9} onPress={() => {}}>
          <Banner
            resizeMethod="resize" 
            source={{ uri: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'}}/>
        </BannerButton>

        <SliderMove 
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={[1,2,3,4, 5, 6, 7, 8, 9, 10]}
          renderItem={({item}) => <SliderItem />}
        />

        <Title>Populares</Title>
        <SliderMove 
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={[1,2,3,4, 5, 6, 7, 8, 9, 10]}
          renderItem={({item}) => <SliderItem />}
        />

        <Title>Mais Votados</Title>
        <SliderMove 
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={[1,2,3,4, 5, 6, 7, 8, 9, 10]}
          renderItem={({item}) => <SliderItem />}
        />
      </ScrollView>    
    </ContainerAll>
  );
}
