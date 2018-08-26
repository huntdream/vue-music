<template>
  <div :class="{'player':true,show:!!detail.url}" v-if="detail.url">
    <p>{{detail.name}}</p>
    <audio :src="detail?detail.url:''" id="player" ref="player"></audio>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Player',
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      detail: state => state.song.detail
    })
  },
  watch: {
    play(now, prev) {
      const player = this.$refs['player'];
      if (now !== prev) {
        player.load();
        player.oncanplay = function() {
          console.log('playing');
          player.play();
        };
      }
    }
  },
  methods: {
    onSrChnage() {
      const player = document.querySelector('#player');
      player.onsr;
    }
  }
};
</script>

<style lang="sass" scoped>
.player
  position: fixed
  opacity: 0
  bottom: -56px
  left: 0
  right: 0
  height: 56px
  background-color: #333
  transition: all .3s ease-in-out
  &.show
    bottom: 0
    opacity: 1
</style>
