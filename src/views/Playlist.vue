<template >
    <div class="playlist-wrap" v-if="playlist.name">
      <div class="playlist-detail-wrap">
        <img :src="playlist.coverImgUrl" alt="playlist.name" />
        <h1>{{playlist.name}}</h1>
      </div>
    </div>
    <spinner v-else></spinner>
</template>

<script>
import { mapState } from 'vuex'
import Spinner from '@/components/Spinner'

export default {
  name: 'Playlist',
  components: { Spinner },
  data() {
    return {}
  },
  created() {
    this.$store.dispatch('playlist/detail', this.$route.params.id)
  },
  computed: {
    ...mapState({
      playlist: state => state.playlist.detail
    })
  },
  methods: {}
}
</script>

<style lang="sass" scoped>
.playlist-wrap
    .playlist-detail-wrap
      img
        width: 5rem
        height: 5rem
        border-radius: 5px
        margin: 1rem
</style>
