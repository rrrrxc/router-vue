<template>
  <div class="aside-container">
    <el-menu :default-active="activeFlag" @select="active">
      <el-menu-item index="0">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="1" >
        <i class="el-icon-document"></i>
        <span slot="title">数据库</span>
      </el-menu-item>
      <!-- <div style="height:60px"></div> -->
    </el-menu>
   

     <div class="aside-footer">
      @Copyright 2023
     </div>
  </div>

 
</template>

<script>
const routeMap = new Map()
routeMap.set('0','/main/default')
routeMap.set('1','/main/data')
export default {
    name : 'AsideCop',
    data:function () {
      return {
        activeFlag:'0'
      }
    },
    methods : {
      active(index) {
        this.activeFlag=index;
        if(routeMap.has(index))
        {
          //防止目标url和当前url相同，push会报错
          const aimUrl=routeMap.get(index);
          const currentUrl= this.$router.currentRoute.fullPath
          if(aimUrl !== currentUrl)
          {
            this.$router.push(routeMap.get(index))
          }
        }
      }
    }
}
</script>
<style lang="scss" scoped>
.aside-container {
  height :calc(100% - 60px);
  ul {
      height:100%;
      overflow-y:auto;
      padding-bottom: 60px;
    }
}
.aside-footer {
  position:fixed;
  width:264px;
  height:60px;
  left:0;
  bottom:0;
  background-color:aqua;
  border-top: 1px solid #e6e6e6;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
}
</style>
