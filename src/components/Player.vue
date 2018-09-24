<template>
  <div :class="{'player-wrap':true, show:!!url.url,full:!mini}" @click="toggleFull">
    <div class="player" v-if="detail">
      <div class="cover">
        <img :src="detail.al.picUrl" alt="Cover" :class="isPlaying?'playing':'paused'">
      </div>
      <div class="info">
        <p class="name">{{detail.name}}</p>
        <p class="author">
          <template v-for="author in detail.ar">
            {{author.name}}
          </template>
        </p>
      </div>
      <div class="control">
        <div :class="['play',isPlaying?'playing':'paused']" @click="play"></div>
      </div>
      <div class="duration-indicator-bg" v-if="mini">
        <div class="duration-indicator" :style="{'transform':timeRatio}"></div>
      </div>
    </div>
    <div class="togglemini" v-if="!mini" @click="toggleMini"></div>
    <audio :src="url?url.url:''" id="player" ref="player"></audio>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Player',
  props: {},
  data() {
    return {
      isPlaying: false,
      duration: 0,
      currentTime: 0,
      mini: true
    };
  },
  computed: {
    ...mapState({
      detail: state => state.song.detail[0],
      url: state => state.song.url
    }),
    timeRatio() {
      const ratio = this.currentTime / this.duration * 100 - 100;
      return `translateX(${ratio}%)`;
    }
  },
  watch: {
    url(now, prev) {
      const player = this.$refs.player;
      if (now !== prev) {
        player.pause();
        player.load();
        player.oncanplay = () => {
          player.play();
          console.log(player.duration);
          this.duration = player.duration;
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
    player.addEventListener('timeupdate', () => {
      this.currentTime = player.currentTime;
    });
  },
  methods: {
    toggleFull(e) {
      if (!e.target.classList.contains('play') && !e.target.classList.contains('togglemini')) {
        this.mini = false;
        document.body.style.overflow = 'hidden';
      }
    },
    toggleMini() {
      document.body.style.overflow = 'auto';
      this.mini = true;
    },
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
  background-color: #7b5757
  transition: all .3s ease-in-out
  z-index: 999
  height: 48px
  transition: all 300ms
  &.show
      bottom: 0
      opacity: 1

  .player
    display: flex
    flex-direction: row
    align-items: center
    height: 48px
    position: relative
    transition: all 300ms
    .cover
      height: 48px
      width: 48px
      img
        height: 100%
        width: 100%
        &.paused
          animation-play-state: paused

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
      position: absolute
      right: 0
      bottom: 0
      height: 48px
      width: 48px
      transition: all 300ms
      .play
        background-repeat: no-repeat
        background-position: center center
        background-size: contain
        height: 36px
        width: 36px
        margin: 6px
        &.playing
          background-image: url(../assets/pause.png)
        &.paused
          background-image: url(../assets/play.png)
    .duration-indicator-bg
      position: absolute
      top: 0
      left: 0
      right: 0
      padding-left: 48px
      height: 48px
      overflow: hidden
      z-index: -1
      .duration-indicator
        display: inline-block
        width: 100%
        transform: translateX(-100%)
        height: 48px
        background: #2b2424
        transition: width 1000ms linear
  &.full
    bottom: 0
    height: 100vh
    .player
      height: 100%
      width: 100%
    .info
      position: absolute
      top: 0
      left: 0
      height: 3.2rem
    .cover
      position: absolute
      left: 50%
      top: 50%
      transform: translate(-50%, -50%)
      width: 240px
      height: 240px
      img
        animation: rotate 10s linear infinite
        border-radius: 50%
    .control
      bottom: 18%
      right: 50%
      transform: translateX(50%)
      margin: 0
    .togglemini
      width: 28px
      height: 28px
      margin: 10px
      position: absolute
      top: 0
      right: 0
      background-image: url(../assets/arrow-down.png)
      background-repeat: no-repeat
      background-size: cover

@keyframes rotate
  from
    transform: rotate(0)
  to
    transform: rotate(1turn)
</style>
