import {defineComponent, PropType} from 'vue'

const student:any = {
  name: '张三',
  age: 20
}
const save = function (nums: Array<number>) {
  return nums
}
const arr:any = [1,22,3]
export default defineComponent({
  props: {
    message: [String, Function] as PropType<string | (() => string)>
  },
  setup() {
    return () => (
        <>
          <el-container class="h-100">
            <el-header>
              <el-menu
                  // default-active={this.$route} 这里调用不到$route所以暂时用router的方法
                  mode="horizontal"
                  router
                  class="el-menu-vertical-demo">
                <el-menu-item route='/categories/create' index='1'>分类</el-menu-item>
                <el-menu-item route='/items/create' index='2'>物品</el-menu-item>
              </el-menu>
            </el-header>
            <el-main>
              <router-view></router-view>
            </el-main>
          </el-container>
        </>
    )
  },
  created() {
    console.log(this)
  }
})