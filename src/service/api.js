import fetch from '../utils/fetch';

const host = 'http://netease.maoyu.info';

export const userdetail = (id = 32693089) =>
  fetch(`${host}/user/detail?uid=${id}`).catch(err => {
    if (err) throw err;
  });
