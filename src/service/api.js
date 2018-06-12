import fetch from '../utils/fetch';

const host = 'http://localhost:3000';

export const userdetail = id => fetch(`${host}/user/detail?uid=${id}`);