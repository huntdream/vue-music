<template>
    <div class="playlist-wrap">
      <div class="playlist-name">{{playlistdetail.name}}</div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Playlist',
  data() {
    return {}
  },
  created() {
    this.$store.dispatch('playlist/detail', this.$route.params.id)
  },
  computed: {
    ...mapState({
      playlistdetail: state => state.playlist.detail
    })
  },
  methods: {}
}
</script>

<style scoped>
</style>