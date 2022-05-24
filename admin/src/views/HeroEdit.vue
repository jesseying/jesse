<template>
  <div>
    <h1>{{id ? '编辑' : '新建'}}英雄</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-tabs value="basic">
        <el-tab-pane label="基础信息" name="basic">
          <el-form-item label="头像">
            <el-upload
                class="avatar-uploader"
                :action="uploadUrl"
                :headers="getAuthHeaders()"
                :on-success="res => $set(model, 'avatar', res.url)"
            >
              <img v-if="model.avatar" :src="model.avatar" class="avatar" :alt="model.name">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="皮肤">
            <el-upload
                class="avatar-uploader"
                :action="uploadUrl"
                :headers="getAuthHeaders()"
                :show-file-list="false"
                :on-success="res => $set(model, 'banner', res.url)"
            >
              <img v-if="model.banner" :src="model.banner" class="avatar" :alt="model.name">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="名称">
            <el-input v-model="model.name"></el-input>
          </el-form-item>
          <el-form-item label="称号">
            <el-input v-model="model.title"></el-input>
          </el-form-item>
          <el-form-item label="英雄定位">
            <el-select v-model="model.categories" multiple>
              <el-option v-for="item of categories" :label="item.name" :key="item._id" :value="item._id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="难度">
            <el-rate :max="9" show-score v-model="model.scores.difficult" style="margin-top: 0.6rem"></el-rate>
          </el-form-item>
          <el-form-item label="技能">
            <el-rate :max="9" show-score v-model="model.scores.skills" style="margin-top: 0.6rem"></el-rate>
          </el-form-item>
          <el-form-item label="攻击">
            <el-rate :max="9" show-score v-model="model.scores.attack" style="margin-top: 0.6rem"></el-rate>
          </el-form-item>
          <el-form-item label="生存">
            <el-rate :max="9" show-score v-model="model.scores.survive" style="margin-top: 0.6rem"></el-rate>
          </el-form-item>
          <el-form-item label="顺风出装">
            <el-select v-model="model.items1" multiple>
              <el-option v-for="item of items1" :label="item.name" :key="item._id" :value="item._id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="逆风出装">
            <el-select v-model="model.items2" multiple>
              <el-option v-for="item of items2" :label="item.name" :key="item._id" :value="item._id"></el-option>
            </el-select>
          </el-form-item>
<!--          <el-form-item label="英雄关系">-->
<!--            <el-select v-model="model.partners" multiple>-->
<!--              <el-option v-for="item of heroes" :label="item.name" :key="item._id" :value="item._id"></el-option>-->
<!--            </el-select>-->
<!--          </el-form-item>-->
          <el-form-item label="使用技巧">
            <el-input type="textarea" v-model="model.usageTip"></el-input>
          </el-form-item>
          <el-form-item label="对抗技巧">
            <el-input type="textarea" v-model="model.battleTip"></el-input>
          </el-form-item>
          <el-form-item label="团战技巧">
            <el-input type="textarea" v-model="model.teamTip"></el-input>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="技能" name="skills">
          <el-button @click="model.skills.push({})">
            <i class="el-icon-plus"></i>添加技能
          </el-button>
          <el-row type="flex" style="flex-wrap: wrap">
            <el-col :md="12" v-for="(item,i) in model.skills" :key="i">
              <el-form-item label="名称" style="flex-wrap: wrap">
                <el-input v-model="item.name"></el-input>
              </el-form-item>
              <el-form-item label="图标" style="flex-wrap: wrap">
                <el-upload
                    class="avatar-uploader"
                    :action="uploadUrl"
                    :headers="getAuthHeaders()"
                    :show-file-list="false"
                    :on-success="res => $set(item,'icon' , res.url)"
                >
                  <img v-if="item.icon" :src="item.icon" class="avatar" :alt="model.name">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form-item label="描述">
                <el-input type="textarea" v-model="item.description"></el-input>
              </el-form-item>
              <el-form-item label="提示">
                <el-input type="textarea" v-model="item.tips"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button size="small" type="danger" @click="model.skills.splice(i,1)">删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <el-form-item style="margin-top:1rem">
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      categories:[],
      items1:[],
      items2:[],
      heroes:[],
      model: {
        name:'',
        avatar:'',
        scores: {
          difficult: 0,
          skills: 0,
          attack: 0,
          survive: 0
        },
        usageTip:'',
        battleTip:'',
        teamTip:'',
        skills: []
      }
      // skills: {
      //   name: '',
      //   icon: '',
      //   description: '',
      //   tips: ''
      // }
    }
  },
  methods: {
    // 新建、编辑分类
    async save(){
      let res
      if (this.id) {
        const res = await this.$http.put(`rest/heroes/${this.id}`,this.model)
      } else {
        const res = await this.$http.post('rest/heroes',this.model)
      }
      this.$router.push('/heroes/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    // 获取id分类
    async fetch() {
      const res = await this.$http.get(`rest/heroes/${this.id}`)
      this.model =
          Object.assign({},this.model, res.data)
    },
    async fetchCategories() {
      const res = await this.$http.get(`rest/categories`)
      this.categories = res.data
    },
    async fetchItems() {
      const res = await this.$http.get(`rest/items`)
      this.items1 = res.data
      this.items2 = res.data
    }
    // 英雄关系
    // , async fetchHeros() {
    //   const res = await this.$http.get(`rest/heroes`)
    //   this.heroes = res.data
    // }
  },
  created() {
    this.fetchCategories()
    this.fetchItems()
    // this.fetchHeros()
    this.id && this.fetch()
  }
}
</script>

<style >
</style>
