import { playlistdetail } from '../../api'

export default {
  namespaced: true,
  state: {
    detail: []
  },
  mutations: {
    saveDetail(state, detail) {
      state.detail = detail
    }
  },
  actions: {
    detail({ commit }, id) {
      return playlistdetail(id).then(res => commit('saveDetail', res.playlist))
    }
  }
}
