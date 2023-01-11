<template>
  <!-- 0.v-bind -->
  <div class="page">
    <div class="bg-video">
      <video src="../assets/HomeVideo.mp4" autoplay loop></video>
    </div>
    <div class="container">
      <!-- <ChildComp></ChildComp> -->
      <div class="desc"></div>
      <div class="login">
        <div class="login-wrapper">
          <el-form :model="form" label-width="80px">
            <el-form-item :label="$t('msg.name')">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item :label="$t('msg.email')">
              <el-input v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item :label="$t('msg.passwd')">
              <el-input v-model="form.passwd" show-password></el-input>
            </el-form-item>
          </el-form>
          <div class="operator">
            <el-button size="small" @click="login" :disabled="canLogin">{{ $t("msg.login") }}</el-button>

            <!-- 语言选择器 -->
            <el-select v-model="selectedLang" placeholder="请选择语言" @change="changeLang">
              <el-option v-for="(lang, index) in langArr" :label="lang.label" :value="lang.value"
                :key="index"></el-option>
              <!-- <el-option  label="中文站" value="zh"></el-option> -->
              <!-- <el-option  label="英文站" value="en"></el-option> -->
            </el-select>

            <!-- 日期选择器 -->
            <el-date-picker v-model="date" type="datetime" placeholder="选择日期时间">
            </el-date-picker>

            <!-- <el-input v-model="globalData.token"></el-input> -->
            <!-- {{ globalData.getter('token') }} -->


          </div>

          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { getToken } from '@/utils/store'
import {state} from '@/store/index'

export default {
  computed: {
    canLogin() {
      const { name, email, passwd } = this.form;
      return !(name && email && passwd)
      // if (this.form.name && this.form.email && this.form.passwd)
      // {
      //   return false;
      // }
      // else{
      //    return true;
      // }
    }
  },
  // 预定义属性
  name: 'HomeView',
  // 组件当中所有的响应式数据
  data: function () {
    return {
      form: {
        name: '',
        email: '',
        passwd: '',
      },
      date:'',
      isShowChild: true,
      pInfo: '这是用来设置默认的input框的值',
      langArr: [
        { label: '中文站', value: 'zh' },
        { label: '英文站', value: 'en' }
      ],
      selectedLang: '',
      globalData: state
    }
  },

  // mounted() {
  //   this.globalData.store = {
  //     token :'6666'
  //   };
  //   setTimeout( () =>this.globalData.commit('token','vuex','HomeView'),4000)
  // },
  // 方法
  methods: {
    // TODO: 更改国际化语言
    changeLang(lang) {
      console.log(this.$i18n.locale, this.$root.$i18n.locale)
      this.$root.$i18n.locale = lang

    },
    async login() {
      //TODO：网络请求
      const token = await getToken()
      sessionStorage.setItem('token', token)//数据存入浏览器
      //TODO:跳转至主页面
      this.$router.push({ path: `main/${this.form.name}`, query: { email: this.form.email } })

    }
  },
}
</script>



<style lang="scss" scoped>
/**
使用了scoped关键字，当前样式只应用于此组件以及子组件，不会影响父组件
*/
html,
body {
  margin: 0;
  padding: 0;
  overflow-y: hidden;
}

.container {
  display: flex;
}

.operator {
  display: flex;
  justify-content: center;
}

.desc {
  width: 60%;
}

.login {
  padding-top: 150px;

  .login-wrapper {
    background-color: #fff;
    width: 300px;
    padding: 40px;
    border-radius: 10px;
  }
}

.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  video {
    width: 100%;
  }
}
</style>