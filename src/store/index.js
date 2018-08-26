import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user';
import playlist from './modules/playlist';
import song from './modules/song';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    playlist,
    song
  }
});
