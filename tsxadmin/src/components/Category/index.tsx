import CategoryEdit from './CategoryEdit'
import { App } from 'vue'
CategoryEdit.install = (app: App) => {
  app.component(CategoryEdit.name, CategoryEdit)
}
export default CategoryEdit