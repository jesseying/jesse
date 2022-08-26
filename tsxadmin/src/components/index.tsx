import CategoryEdit from './Category/index'
import ItemEdit from './Item/index'
import { App } from 'vue'
const components = [ItemEdit,CategoryEdit]
const install = (app: App) => {
  components.forEach((component) => {
    app.use(component.install)
  })
}
const componentLists = {
  install,
  ItemEdit,
  CategoryEdit
}
export default componentLists