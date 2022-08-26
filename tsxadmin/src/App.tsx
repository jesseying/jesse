import { defineComponent, ref } from 'vue'
import { RouterView } from 'vue-router'

export default defineComponent({
  setup() {
    // const msg = ref<string>('Hello vue3 and TSX');
    return () => (
        <>
          <RouterView />
        </>
    )
  },
})