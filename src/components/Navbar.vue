<template>
    <header :class="{'top-nav':true,'no-transparent':this.isAlpha}">
        <router-link to="/" active-class="active" class="nav-item" exact>
            <span class="nav-icon me"></span>
        </router-link>
        <router-link exact to="/music" active-class="active" class="nav-item">
            <span class="nav-icon music"></span>
        </router-link>
        <router-link to="/community" active-class="active" class="nav-item">
            <span class="nav-icon community"></span>
        </router-link>
    </header>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isAlpha: false
    }
  },
  created() {
    window.addEventListener('scroll', this.toggleAlpha)
  },
  methods: {
    toggleAlpha() {
      let top = window.pageYOffset || document.documentElement.scrollTop
      if (top > 250) {
        this.isAlpha = true
      } else {
        this.isAlpha = false
      }
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.toggleAlpha)
  }
}
</script>

<style lang="sass" scoped>
    .top-nav
        position: fixed
        top: 0
        width: 100%
        display: flex
        flex-direction: row
        justify-content: center
        height: 3rem
        line-height: 3rem
        background-color: rgba(0, 0, 0, 0.8)
        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12);
        z-index: 999

        &.no-transparent
            background-color: rgba(0, 0, 0, 1)

        .nav-item
            color: #fff
            font-weight: 500
            transition: background-color .2s

            &:hover
                background-color: #7d7ab5

            &.active
                background-color: #000
                box-shadow: inset 0px 0px 0px 1px #252b23

            .nav-icon
                display: block
                background: no-repeat center
                background-size: 42%;
                width: 3rem
                height: 3rem
                margin: 0 1rem
                &.me
                    background-image: url(../assets/me.png)

                &.community
                    background-image: url(../assets/community.png)
                &.music
                    background-image: url(../assets/music.png)
</style>
