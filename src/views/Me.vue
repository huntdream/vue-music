<template>
  <div>
    <div class="userdetail" v-if="userdetail.code">
      <div class="user-bg" :style="{backgroundImage:`url(${userdetail.profile.backgroundUrl})`}"> </div>
    </div>
    <label for="uid">UID</label><input type="text" id="uid" v-model="uid">
  </div>
</template>

<script>
import { userdetail } from '@/service/api'
import debounce from 'lodash/debounce'

export default {
  name: 'me',
  data() {
    return { userdetail: [], uid: '' }
  },
  created() {
    this.queryuserdetail()
    this.debounceQuery = debounce(this.queryuserdetail, 500)
  },
  methods: {
    say() {
      console.log("hello")
    },
    queryuserdetail(id) {
      userdetail(id).then(res => this.userdetail = res)
    }
  },
  watch: {
    uid: function () {
      this.debounceQuery(this.uid)
    }
  },
}
</script>

<style lang="sass">
.user-bg
  width: 100%
  height: 350px
  background-size: cover
  background-repeat: no-repeat
  background-position: center
</style>
