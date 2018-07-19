<template>
<div class="spinner-wrap">
  <div class="spinner"></div>
  </div>
</template>

<script>
export default {
  name: 'Spinner'
}
</script>


<style lang="sass">
.spinner-wrap
  width: 100%
  display: flex
  flex-direction: row
  justify-content: center
  padding: 16px 0
  .spinner
    width: 20px
    height: 20px
    border-radius: 50%
    border: 3px solid #6b2dd5
    border-bottom-color: transparent
    animation: spin .4s ease-in-out infinite

@keyframes spin
  from 
    transform: rotate(0)
  to 
    transform: rotate(360deg)
</style>
