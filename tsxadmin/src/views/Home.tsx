import {defineComponent, defineProps, PropType} from 'vue'
import './Home.scss'

const student:any = {
  name: '张三',
  age: 20
}
const save = function (nums: Array<number>) {
  return nums
}
const ceath = (nums: Array<number>) => {
  return nums
}
const arr:any = [1,22,3]
export default defineComponent(() => {
  const props:any = defineProps({
    message: [String, Function] as PropType<string | (() => string)>
  })
    return () => (
        <>
          <el-container class="el-container">
            <el-header class="el-header">
              <el-menu
                  // default-active={this.$route} 这里调用不到$route所以暂时用router的方法
                  mode="horizontal"
                  router
                  default-active="0"
                  text-color="#fff"
                  active-text-color="#ffe63d"
                  background-color="#000"
                  class="el-menu-vertical-demo">
                <el-menu-item route='/Categories' index='0'>首页</el-menu-item>
                <el-menu-item route='/categories/create' index='1'>分类</el-menu-item>
                <el-menu-item route='/items/create' index='2'>物品</el-menu-item>
              </el-menu>
            </el-header>
            <el-main class="el-main">
              <router-view></router-view>
            </el-main>
          </el-container>
        </>
    )
})