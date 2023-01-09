import I18n from 'vue-i18n'//引入
//VUE静态挂载
import Vue from 'vue'
Vue.use(I18n)

const language = {
    //语言
    zh: {
        msg : {
            login:'登录',
            name:'用户名',
            passwd:'密码',
            email:'邮箱'
        }
    },
    en: {
        msg : {
            login :'Login in',
            name :'Username',
            passwd:'Password',
            email :'email'
        }
    }
}

const i18n =new I18n (
    {
        locale:'en',//默认语言
        messages:language
    }
)

export default i18n//导出