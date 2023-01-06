<template>
  <div class="container">
   <header>
    <header-cop></header-cop>
   </header>
   <div class="body">
     <aside>
     <aside-cop></aside-cop>
     </aside>
     <main>
      <router-view></router-view>
     </main>
   </div>


  </div>
</template>

<script >
import AsideCop from '@/components/AsideCop.vue'
import HeaderCop from '@/components/HeaderCop.vue'
// import {store} from '@/utils/store'
export default {
  name : 'MainView',
  components :{
  AsideCop,HeaderCop
},
props:['UserId'],

// mounted () {
//   console.log(this.$route.params)
// }
beforeRouteLeave (to, from, next) {
  const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
  if (answer) {
    next()
  } else {
    next(false)
  }
}
}
</script>

<style lang="scss">

.container {
  height: 100vh;
  width: 100%;
  header {
    height :60px;
    background-color: black;
    color:#fff;
  }
  aside {
    width :264px;
    height :100%;
    
  }
  main{
    width:calc(100% - 264px);
    overflow-y:auto;
  }
  }
  .body {
    height :calc(100% - 60px);//两个数值之间有空格
    display:flex
  }

</style>
