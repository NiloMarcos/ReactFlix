import styled from 'styled-components/native';

export const ContainerAll = styled.SafeAreaView`
  background-color: #141a29;
  flex: 1;
  padding: 4px 0;
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 14px;
  margin-bottom: 8px;

`;

export const Input = styled.TextInput`
  background-color: rgba(255, 255, 255, 0.4);
  width: 85%;
  height: 50px;
  border-radius: 15px;
  padding: 8px 15px;
  font-size: 18px;
  color: #FFF;
`;

export const SearchButton = styled.TouchableOpacity`
  width: 15%;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #FFF;
  padding-top: 20px;
  padding-bottom: 8px;
  padding-left: 14px;
  padding-right: 14px;
`;

export const BannerButton = styled.TouchableOpacity`
  align-items: center;
`;

export const Banner = styled.Image`
  width: 95%;
  height: 250px;
  border-radius: 6px;
  margin: 0 14px;
`;

export const SliderMove = styled.FlatList`
  height: 250px;
  padding: 0 14px;
`;