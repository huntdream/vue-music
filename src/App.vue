<template>
    <div id="app">
        <navbar></navbar>
        <div class="container">
            <transition name="slide" mode="out-in">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </transition>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: { Navbar }
}
</script>

<style lang="sass">
    html
        width: 100%
        font-size: 16px
        font-family: 微软雅黑

    body
        width: 100vw
        max-width: 100%
        height: 100%
        margin: 0
        padding: 0
        overflow-x: hidden

    *,:after,:before
        box-sizing: border-box

    .slide-enter
        transform: scale(.9)
        opacity: 0

    .slide-enter-to
        transform: scale(1)
        opacity: 1

    .slide-enter-active
        transition: all .1s ease

    .slide-leave
        transform: translateX(0) scale(1)
        opacity: 1

    .slide-leave-to
        transform: translateX(50%) scale(.8)
        opacity: 0

    .slide-leave-active
        transition: all .1s ease

    .container
        margin-top: 48px

</style>

