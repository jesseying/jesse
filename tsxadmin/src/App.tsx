import { defineComponent, ref } from 'vue'
import { RouterView } from 'vue-router'
import './App.css'


export default defineComponent(() =>{
  return () => (
      <>
        <RouterView />
      </>
  )
})