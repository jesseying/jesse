import { defineComponent, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

export default defineComponent({
  setup() {
    // const msg = ref<string>('Hello vue3 and TSX');
    return () => (
        <>
          {/* <hello-world msg={msg.value}></hello-world> */}
          <div id="nav">
            <RouterLink to="/">Home</RouterLink> |<RouterLink to="/about">About</RouterLink>
          </div>
          <RouterView />
        </>
    )
  },
})