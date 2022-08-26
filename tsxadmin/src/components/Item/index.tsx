import ItemEdit from './ItemEdit'
import { App } from 'vue'
ItemEdit.install = (app: App) => {
  app.component(ItemEdit.name, ItemEdit)
}
export default ItemEdit