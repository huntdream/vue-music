import { songurl, songdetail } from '../../api';

export default {
  namespaced: true,
  state: {
    url: [],
    detail: []
  },
  mutations: {
    url(state, url) {
      state.url = url;
    },
    detail(state, detail) {
      state.detail = detail;
    }
  },
  actions: {
    url({ commit }, id) {
      return songurl(id).then(res => {
        if (typeof id === 'number') {
          commit('url', res.data[0]);
        } else {
          commit('url', res.data);
        }
      });
    },
    detail({ commit }, id) {
      return songdetail(id).then(res => {
        commit('detail', res.songs);
      });
    }
  }
};
