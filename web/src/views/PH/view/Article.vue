<template>
  <div v-if="model">
    <div class="d-flex py-3 px-2 border-bottom" >
      <div class="iconfont icon-back text-blue">
        <strong class="flex-1 text-blue pl-2">
          {{ model.title }}
        </strong>
        <div class="text-grey fs-xs">
          2019-06-19
        </div>
      </div>
    </div>
    <div v-html="model.body" class="px-3 body fs-lg"></div>
    <div class="px-3 border-top py-2">
      <div class="d-flex ai-center">
        <i class="iconfont icon-Menu"></i>
        <strong class="text-blue fs-lg ml-2">相关资讯</strong>
      </div>
      <div class="pt-2">
        <router-link class="py-3 fs-lg"
                     :to="`/articles/${item._id}`"
                     tag="div"
                     v-for="item in model.related"
                     :key="item._id">
          {{item.title}}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { required: true }
  },
  data() {
    return {
      model: null
    }
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`articles/${this.id}`)
      this.model = res.data
      console.log(this.model)
    }
  },
  created() {
    this.fetch()
  },
  watch: {
    id: 'fetch'
  }
}
</script>

<style lang="scss">
.body {
  img {
    max-width: 100%;
    height: auto;
  }
  iframe {
    width: 100%;
    height: auto;
  }
}
.icon-back {
  font-size: 1.6923rem;
}
</style>
