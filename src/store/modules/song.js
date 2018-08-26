import { songdetail } from '../../api';

export default {
  namespaced: true,
  state: {
    detail: []
  },
  mutations: {
    detail(state, detail) {
      state.detail = detail;
    }
  },
  actions: {
    detail({ commit }, { id, name }) {
      console.log(name, id);
      return songdetail(id).then(res => {
        if (typeof id === 'number') {
          const data = res.data[0];
          console.log(data);
          data.name = name;
          commit('detail', data);
        } else {
          commit('detail', res.data);
        }
      });
    }
  }
};
