<template>
     <el-menu :default-active="activeFlag" @select="active">
      
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" >
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
</template>

<script>
const routeMap = new Map()
routeMap.set('2','/main/default')
export default {
    name : 'AsideCop',
    data:function () {
      return {
        activeFlag:''
      }
    },
    methods : {
      active(index) {
        this.activeFlag=index;
        if(routeMap.has(index))
        {
          this.$router.push(routeMap.get(index))
        }
      }
    }
}
</script>