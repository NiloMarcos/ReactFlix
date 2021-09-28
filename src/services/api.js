import axios from "axios";

// https://api.themoviedb.org/3/movie/now_playing/?api_key=524abc92267ab054d56ed77bfb02751e&language=pt-br&page=1

// /movie/now_playing/ &language=pt-br &page=1

export const key = '524abc92267ab054d56ed77bfb02751e'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export default api;