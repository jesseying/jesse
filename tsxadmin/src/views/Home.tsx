import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Home',
  setup() {
    return () => (
        <>
          <div class="home">
            <h1>这里是首页</h1>
            <list msg="我是list组件"></list>
            <hello-world msg="Hello TSX World"></hello-world>
          </div>
        </>
    )
  }
})