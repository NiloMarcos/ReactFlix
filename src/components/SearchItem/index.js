import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { ContainerAll, Banner, Title, RateContainer, Rate } from './styles';

export default function SearchItem({ data, navigatePage }) {
  function detailMove(){
    navigatePage(data);
  }

 return (
  <ContainerAll activeOpacity={0.7} onPress={() => detailMove()}>
    { data?.poster_path ? (
      <Banner 
        resizeMethod="resize"
        source={{ uri: `https://image.tmdb.org/t/p/original/${data?.poster_path}`}}
      />
    ) : (
      <Banner 
      resizeMethod="resize"
      source={require('../../assets/semfoto.png')}
    />
    )}

    <Title>{data?.title}</Title>

    <RateContainer>
      <Ionicons name="md-star" size={12} color="#e7a74e"/>
      <Rate>{data?.vote_average}/10</Rate>
    </RateContainer>
  </ContainerAll>
);
}