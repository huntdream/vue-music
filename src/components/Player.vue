<template>
  <div :class="{'player-wrap':true, show:!!url.url}" >
    <div class="player" v-if="detail">
      <div class="cover">
        <img :src="detail.al.picUrl" alt="Cover">
      </div>
      <div class="info">
        <p class="name">{{detail.name}}</p>
        <p class="author">
          <template v-for="author in detail.ar" >
              {{author.name}}
          </template>
        </p>
      </div>
      <div class="control">
        <div :class="['play',isPlaying?'playing':'paused']" @click="play"></div>
      </div>
    </div>
    <audio :src="url?url.url:''" id="player" ref="player" ></audio>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Player',
  props: {},
  data() {
    return {
      isPlaying: false
    };
  },
  computed: {
    ...mapState({
      detail: state => state.song.detail[0],
      url: state => state.song.url
    })
  },
  watch: {
    url(now, prev) {
      const player = this.$refs.player;
      if (now !== prev) {
        player.pause();
        player.load();
        player.oncanplay = function() {
          player.play();
        };
      }
    }
  },
  mounted() {
    const player = this.$refs.player;
    player.addEventListener('playing', () => {
      this.isPlaying = true;
    });
    player.addEventListener('pause', () => {
      this.isPlaying = false;
    });
  },
  methods: {
    play() {
      const player = this.$refs.player;
      if (this.isPlaying) {
        player.pause();
      } else {
        player.play();
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.player-wrap
  position: fixed
  opacity: 0
  bottom: -56px
  left: 0
  right: 0
  background-color: #090a0d
  transition: all .3s ease-in-out
  &.show
      bottom: 0
      opacity: 1
  .player
    display: flex
    flex-direction: row
    align-items: center
    height: 60px

    .cover
      height: 60px
      width: 60px
      img
        height: 60px
        width: 60px

    .info
      height: 100%
      display: flex
      flex-direction: column
      align-items: flex-start
      justify-content: center
      margin-left: 2rem
      .name
        color: #eeeff0
      .author
        color: #a2bbcc
        font-size: 0.75rem
    .control
      margin-left: auto
      margin-right: 2rem
      .play
        background-repeat: no-repeat
        background-position: center center
        background-size: contain
        height: 36px
        width: 36px
        margin: 12px
        &.playing
          background-image: url(../assets/pause.png)
        &.paused
          background-image: url(../assets/play.png)
</style>
