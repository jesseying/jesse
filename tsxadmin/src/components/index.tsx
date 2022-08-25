import HelloWorld from './helloWorld/index'
import { App } from 'vue'
const components = [HelloWorld];
const install = (app: App) => {
  components.forEach((component) => {
    app.use(component.install)
  })
}
const componentLists = {
  install,
  HelloWorld,
}
export default componentLists