import axios from 'axios';

axios.defaults.baseURL = 'https://netease.maoyu.info';

const id = 32693089;

export const userdetail = () =>
  axios.get(`/user/detail?uid=${id}`).then(res => res.data);

export const userplaylist = () =>
  axios.get(`/user/playlist?uid=${id}`).then(res => res.data);

export const playlistdetail = pid =>
  axios.get(`/playlist/detail?id=${pid}`).then(res => res.data);

export const songdetail = id =>
  axios.get(`/music/url?id=${id}`).then(res => res.data);
