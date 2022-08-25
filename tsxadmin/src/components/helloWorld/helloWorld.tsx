import { defineComponent } from 'vue';
import './helloWorld.scss';
export default defineComponent({
  name: 'hello-world',
  props: { msg: String },
  setup(props) {
    return () => <h1 class="hello-world">{props.msg}</h1>;
  },
})