import {defineComponent, getCurrentInstance } from 'vue'
import './CategoriesList.scss'

export default defineComponent(async () => {
  const {proxy}: any = getCurrentInstance()
  const fetch = () => {
    return new Promise(resolve => {
      proxy.$http.get('rest/categories').then((res:any) => {
        if (res.status == 200) {
          resolve(res.data)
        }
      })
    })
  }
  let items: any = await fetch()
  console.log(items)
  return () => (
      <div class="CategoriesList">
        <el-card class="box-card">
          <div class="title">
            <p>分类列表</p>
            <el-table data={items}>
              <el-table-column prop="_id" label="ID" width="250"></el-table-column>
              <el-table-column prop="parent" label="上级分类"></el-table-column>
              <el-table-column prop="name" label="分类名称"></el-table-column>
              {/*<el-table-column fixed={"right"} label="操作" width="180">*/}
              {/*      <template slot-scope="scope">*/}
              {/*        <el-button type="text" size="small" v-on:click={proxy.$router.push(`/categories/edit/${scope.row._id}`)}>编辑</el-button>*/}
              {/*      <el-button type="text" size="small" v-on:click={remove(scope.row)}>删除</el-button>*/}
              {/*  </template>*/}
              {/*</el-table-column>*/}
            </el-table>
          </div>
        </el-card>
      </div>
  )
})