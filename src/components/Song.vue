<template>
  <div class="song" @click="play(id,name)">
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
    play(id, name) {
      this.$store.dispatch('song/detail', { id, name });
    }
  }
};
</script>

<style lang="sass" scoped>
.song
  padding: 1rem
  border-top: 1px solid #eee
</style>
