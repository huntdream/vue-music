<template>
    <div id="app">
        <navbar></navbar>
        <div class="container">
            <!-- <transition name="slide" mode="out-in"> -->
                    <router-view></router-view>
            <!-- </transition> -->
        </div>
        <Player></Player>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import Player from '@/components/Player';

export default {
  components: { Navbar, Player }
};
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

    .btn
        border: none
        padding: 0.6rem 1rem
        outline: none
        position: relative
        cursor: pointer
        overflow: hidden

    .ripple-container
        pointer-events: none
        position: relative
        width: 100%
        height: 100%
        overflow: hidden

        .ripple
            display: block
            transform: scale(0)
            border-radius: 100%
            width: 1px
            height: 1px
            position: absolute
            opacity: 0.75
            background-color: #eee
            animation: ripple 2s 
        
    @keyframes ripple
        to
            opacity: 0
            transform: scale(6)

</style>

