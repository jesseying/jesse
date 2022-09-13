import { defineComponent, ref } from 'vue'
export default defineComponent(() => {
  const name:string = 'About'
  const msg = ref('This is an about tsx page')
  return () => (
      <>
        <div>
          <h1>{msg.value}</h1>
        </div>
      </>
  )
})