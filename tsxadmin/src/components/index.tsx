import ItemEdit from './Item/index'
import CategoryEdit from './Category/index'
import CategoriesList from './Categories/index'
import { App } from 'vue'
const components = [ItemEdit,CategoryEdit,CategoriesList]
const install = (app: App) => {
  components.forEach((component) => {
    app.use(component.install)
  })
}
const componentLists = {
  install,
  ItemEdit,
  CategoryEdit,
  CategoriesList
}
export default componentLists