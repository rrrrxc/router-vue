import Eli18nen from 'element-ui/lib/locale/lang/en'
import Eli18nzh from 'element-ui/lib/locale/lang/zh-CN'


import ElementLocale from 'element-ui/lib/locale/index'

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
            email:'邮箱',
            index:'首页',
            dataMg:'数据管理',
            todayWeather:'今日天气',
            subMsg:'人望山，鱼窥荷，真正想要的东西早已失去',
            search:'查询',
            weatherItem:'天气条目',
            key:'key值',
            current:'现状'

        },
        ...Eli18nzh
    },
    en: {
        msg : {
            login :'Login in',
            name :'Username',
            passwd:'Password',
            email :'email',
            index:'Main Page',
            dataMg:'Data Manage',
            todayWeather:'Today Weather',
            subMsg:'People look at the mountains, fish peep into the lotus, what they really want has long been lost',
            search:'search',
            weatherItem:'Weather Property',
            key:"key's value",
            current:'current situation '


        },
        ...Eli18nen
    }
}

const i18n =new I18n (
    {
        locale:'zh',//默认语言
        messages:language
    }
)

export default i18n//导出
// 按需引入
ElementLocale.i18n((key, value) => i18n.t(key, value))