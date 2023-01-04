<template>
  <div class="container">
   <header>这是头部</header>

   <div class="body">
     <aside>
     <aside-cop></aside-cop>
     </aside>
     <main>这是main</main>
   </div>

   
  </div>
</template>

<script >
import AsideCop from '@/components/AsideCop.vue'

export default {
  name : 'MainView',
  components :{
  AsideCop
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
  }
  aside {
    width :264px;
    height :100%;
    ul {
      height:100%;
      overflow-y:auto;
    }
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
