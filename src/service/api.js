import axios from 'axios'

const host = 'https://netease.maoyu.info'
const id = 32693089

export const userdetail = () =>
  axios.get(`${host}/user/detail?uid=${id}`).then(res => res.data)

export const userplaylist = () =>
  axios.get(`${host}/user/playlist?uid=${id}`).then(res => res.data)
