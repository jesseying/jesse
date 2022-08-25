import HelloWorld from './helloWorld'
import { App } from 'vue'
HelloWorld.install = (app: App) => {
  app.component(HelloWorld.name, HelloWorld)
}
export default HelloWorld