import { songurl, songdetail } from '../../api';

export default {
  namespaced: true,
  state: {
    url: [],
    detail: [],
    queue: [],
    playing: false
  },
  mutations: {
    url(state, url) {
      state.url = url;
    },
    detail(state, detail) {
      state.detail = detail;
    },
    playing(state, isPlaying) {
      state.playing = isPlaying;
    },
    add(state, song) {
      state.queue.push(song);
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
    },
    play({ commit }) {
      commit('playing', true);
    },
    pause({ commit }) {
      commit('playing', false);
    },
    add({ commit, state }, song) {
      if (!state.queue.find(item => item.id === song.id)) {
        commit('add', song);
      }
    }
  }
};
