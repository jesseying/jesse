import { defineComponent } from 'vue'
import './CategoryEdit.scss'
export default defineComponent(() => {
  const props:any = ({
    msg: String
  })
  const name:string = 'category-edit'
  return () => (
      <>
        <div>
          <el-card class="box-card">
            <div class="clearfix">
              <span>{name}</span>
              <el-button style={"float: right; padding: 3px 0"} type="text">操作按钮</el-button>
            </div>
          </el-card>
        </div>
      </>
  )
})