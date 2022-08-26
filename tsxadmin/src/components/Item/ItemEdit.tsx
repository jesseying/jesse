import { defineComponent } from 'vue'
import './ItemEdit.scss'
export default defineComponent({
  props: { msg: String },
  setup() {
    const name:string = 'ItemEdit'
    return () => (
        <>
          <div>
            <el-card class="box-card">
              <div class="clearfix">
                <span>{name}</span>
                <el-button style={"float: right; padding: 3px 0"} type="text">{name}</el-button>
              </div>
            </el-card>
          </div>
        </>
    )
  }
})