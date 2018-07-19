import Vue from 'vue'
import Router from 'vue-router'
import Me from '@/views/Me'
import Music from '@/views/Music'
import Community from '@/views/Community'
import Playlist from '@/views/Playlist'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'music',
    component: Music
  },
    {
      path: '/me',
      name: 'me',
      component: Me
    },
    {
      path: '/community',
      name: 'community',
      component: Community
    }, {
      path: '/playlist/:id',
      name: 'playlist',
      component: Playlist
    }
  ]
})