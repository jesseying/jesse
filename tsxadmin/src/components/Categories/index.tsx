import CategoriesList from './CategoriesList'
import { App } from 'vue'
CategoriesList.install = (app: App) => {
  app.component(CategoriesList.name, CategoriesList)
}
export default CategoriesList