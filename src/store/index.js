import { getIterator } from "core-js"

const state = {
    store:{
         token:'1234567'
          },
    //改值函数，修改同时记录组件名
    commit (key,value,compName) {
        console.log(compName,key,value)//标准输出，输出到文件中
        this.store[key]=value//改值
    },

    //取值函数
    getter(key) {
        return this.store[key]
    }
   
}
//不让用户修改token,提供方法
//在方法中记录修改的日志


export {state}