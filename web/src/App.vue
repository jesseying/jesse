<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>

</style>

<script>
export default {
  mounted() {
    if (this._isMobile()) {
      this.$router.replace('/phindex')
    } else {
      this.$router.replace('/')
    }
  },
  methods: {
    _isMobile() {
      return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
    }
  }
}
</script>
