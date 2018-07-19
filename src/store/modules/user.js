import { userdetail, userplaylist } from '../../api/index'

export default {
  namespaced: true,
  state: {
    detail: [],
    playlist: []
  },
  mutations: {
    saveDetail(state, detail) {
      state.detail = detail
    },
    savePlaylist(state, playlist) {
      state.playlist = playlist
    }
  },
  actions: {
    detail({ commit }) {
      return userdetail().then(res => commit('saveDetail', res))
    },
    playlist({ commit }) {
      return userplaylist().then(res => commit('savePlaylist', res.playlist))
    }
  }
}
