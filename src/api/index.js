import axios from 'axios';
import { API_SERVER, INIT_ID } from '../config';

axios.defaults.baseURL = API_SERVER;

const id = INIT_ID;

export const userdetail = () =>
  axios.get(`/user/detail?uid=${id}`).then(res => res.data);

export const userplaylist = () =>
  axios.get(`/user/playlist?uid=${id}`).then(res => res.data);

export const playlistdetail = pid =>
  axios.get(`/playlist/detail?id=${pid}`).then(res => res.data);

export const songurl = id =>
  axios.get(`/song/url?id=${id}`).then(res => res.data);

export const songdetail = id =>
  axios.get(`/song/detail?ids=${id}`).then(res => res.data);
