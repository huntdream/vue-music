<template>
  <div>
    <h1>My View</h1>
    <button @click="say()">Say</button>
  </div>
</template>

<script>
export default {
  name: 'me',
  data() {
    return {
      name: 'hello'
    }
  },
  methods: {
    say() {
      console.log("hello")
    }
  }
}
</script>
