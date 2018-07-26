<template>
    <div class="user-wrap" v-if="userdetail.code">
        <div class="userdetail-wrap">
            <div class="userdetail">
                <img class="user-bg" :src="userdetail.profile.backgroundUrl"/>
                <img class="user-avatar" :src="userdetail.profile.avatarUrl" alt="avatar">
                <div class="user-info">
                    <p class="user-info-name">
                        {{userdetail.profile.nickname}}
                    </p>
                </div>
            </div>
        </div>
        <div class="user-playlist">
            <div class="user-custom-playlist">
                <div class="playlist-label my-playlist">我创建的歌单</div>
                <router-link :to="{name: 'playlist',params:{id: playlist.id}}" tag="div" class="playlist-item"
                             v-for="playlist in userplaylist" :key="playlist.id">
                    <div class="playlist-cover">
                        <img :src="playlist.coverImgUrl" alt="cover">
                    </div>
                    <div class="playlist-name">
                        {{playlist.name}}
                    </div>
                </router-link>
            </div>
            <div class="user-subscribed-playlist"></div>
        </div>
    </div>
    <spinner v-else></spinner>
</template>

<script>
import { mapState } from 'vuex'
import Spinner from '@/components/Spinner'

export default {
  name: 'Me',
  components: { Spinner },
  data() {
    return {}
  },
  created() {
    this.$store.dispatch('user/detail')
    this.$store.dispatch('user/playlist')
  },
  computed: {
    ...mapState({
      userdetail: state => state.user.detail,
      userplaylist: state => state.user.playlist
    })
  },
  methods: {}
}
</script>

<style lang="sass">
    .user-wrap
        .userdetail-wrap
            position: fixed
            top: 48px
            height: 250px
            z-index: -1
            width: 100%
            .userdetail
                width: 100%
                height: 250px
                position: relative
                .user-bg
                    position: absolute
                    top: -48px
                    width: 100%
                    z-index: -1
                .user-avatar
                    width: 70px
                    height: 70px
                    position: absolute
                    top: 54px
                    left: 30px
                    border-radius: 50%
                    box-shadow: 0 0 13px 1px #cd7f7f
                .user-info
                    position: absolute
                    bottom: 56px
                    left: 20px
                    right: 0
                    .user-info-name
                        display: inline-block
                        margin: 0
                        padding: 5px 8px
                        font-size: 1.3rem
                        color: #fff
                        background-color: rgba(107, 116, 220, 0.53)
                        border-radius: 4px

        .user-playlist
            background-color: #fff
            width: 100%
            margin-top: 300px
            .user-custom-playlist
                .playlist-label
                    height: 2rem
                    padding: 0 0.5rem
                    line-height: 2rem
                    background-color: #eee
                    &.my-playlist
                        position: sticky
                        top: 48px
                .playlist-item
                    display: flex
                    flex-direction: row
                    width: 100%
                    height: 3rem
                    padding: 0 16px
                    margin: 4px 0
                    align-items: center

                    .playlist-cover
                        margin: 4px 1.5rem 4px 0
                        width: 3rem
                        height: 3rem
                        img
                            width: 40px
                            height: 40px
                            margin: 4px 0
                            border-radius: 4px
                    .playlist-name
                        flex: 1
</style>
