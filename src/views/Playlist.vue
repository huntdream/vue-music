<template>
    <div>Play list here</div>
</template>

<script>
  import {playlistdetail} from '../api/index'

  export default {
    name: 'Playlist',
    data() {
      return {
        playlist: []
      }
    },
    created() {
      this.getplaylistdetail()
    },
    methods: {
      getplaylistdetail() {
        playlistdetail(this.$route.params.id).then(res => this.playlist = res)
      }
    }
  }
</script>

<style scoped>

</style>