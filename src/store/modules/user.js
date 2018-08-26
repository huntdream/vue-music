import { userdetail, userplaylist } from '../../api';

export default {
  namespaced: true,
  state: {
    detail: [],
    playlist: [],
    playlistcount: 0
  },
  mutations: {
    saveDetail(state, detail) {
      state.detail = detail;
    },
    savePlaylist(state, playlist) {
      state.playlist = playlist;
    },
    setPlaylistCount(state, count) {
      state.playlistcount = count;
    }
  },
  actions: {
    detail({ commit }) {
      return userdetail().then(res => {
        commit('saveDetail', res);
        commit('setPlaylistCount', res.profile.playlistCount);
      });
    },
    playlist({ commit }) {
      return userplaylist().then(res => commit('savePlaylist', res.playlist));
    }
  }
};
