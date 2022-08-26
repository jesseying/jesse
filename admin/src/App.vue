<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this)
  },
  mounted() {
    console.log(this)
  }
}
</script>

<style>
html,body{
  margin: 0;
  padding: 0;
}
</style>
