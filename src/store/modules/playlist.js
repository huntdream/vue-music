import { playlistdetail } from '../../api'

export default {
  namespaced: true,
  state: {
    detail: []
  },
  mutations: {
    clearDetail(state) {
      state.detail = []
    },
    saveDetail(state, detail) {
      state.detail = detail
    }
  },
  actions: {
    detail({ commit }, id) {
      commit('clearDetail')
      return playlistdetail(id).then(res => commit('saveDetail', res.playlist))
    }
  }
}
