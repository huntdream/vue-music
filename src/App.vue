<template>
  <div id="app">
    <navbar></navbar>
    <transition name="slide" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
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

body
  width: 100vw
  height: 100%
  margin: 0
  padding: 0
  overflow-x: hidden
  background-color: #313030


// transition slide
.slide-enter
  transform: translateY(30%)
  opacity: 0

.slide-enter-to
  transform: translateY(0)
  opacity: 1

.slide-enter-active
  transition: all .2s ease;

.slide-leave
  transform: translateX(0)
  opacity: 1


.slide-leave-to
  transform: translateX(50%)
  opacity: 0

.slide-leave-active
  transition: all .2s ease

</style>

