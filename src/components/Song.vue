<template>
  <div class="song" @click="play(id)">
    {{name}}
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Song',
  props: ['name', 'id'],
  computed: {
    ...mapState({
      detail: state => state.song.detail
    })
  },
  methods: {
    play(id) {
      this.$store.dispatch('song/url', id);
      this.$store.dispatch('song/detail', id);
    }
  }
};
</script>

<style lang="sass" scoped>
.song
  padding: 1rem
  border-top: 1px solid #eee
</style>
