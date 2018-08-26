<template >
    <div class="playlist-wrap" v-if="playlist.name">
      <div class="playlist-detail-wrap">
        <img :src="playlist.coverImgUrl" alt="playlist.name" />
        <h1>{{playlist.name}}</h1>
      </div>
      <div class="playlist-tracks-wrap">
        <template v-for="track in playlist.tracks">
          <Song :key="track.id" :name="track.name" :id="track.id"></Song>
        </template>
      </div>
    </div>
    <spinner v-else></spinner>
</template>

<script>
import { mapState } from 'vuex';
import Spinner from '@/components/Spinner';
import Song from '@/components/Song';

export default {
  name: 'Playlist',
  components: { Spinner, Song },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch('playlist/detail', this.$route.params.id);
  },
  computed: {
    ...mapState({
      playlist: state => state.playlist.detail
    })
  },
  methods: {}
};
</script>

<style lang="sass" scoped>
.playlist-wrap
    .playlist-detail-wrap
      img
        width: 5rem
        height: 5rem
        border-radius: 5px
        margin: 1rem
    
    .playlist-tracks-wrap
      
</style>
