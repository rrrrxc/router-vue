<template>
    <div class='default' ref="default"  @scroll="setButton($event,'哈哈哈')">

    <div ref="top">
        <main-title>
            {{$t('msg.todayWeather')}}
            <template v-slot:sub>
                {{$t('msg.subMsg')}}
            </template>
        </main-title>
        <!-- <tab-header :title="msg" color="red"/>
        <tab-header title="这是第二个父亲传递的" color="green"/> -->
    </div>

    <div class="body">
        <main-body></main-body>
        <!-- <tab-body>
            <h1>匿名插槽</h1>
            <template v-slot:header="slotProp">
                <h1 >具名插槽{{ slotProp.user.name }}</h1>
            </template>
            <template v-slot:header="{ user }">
                <h1 >具名插槽{{ user.name }}</h1>
            </template>
        </tab-body> -->
    </div>

    <div v-show='needShow' class="back"><el-button type="primary"  @click="returnTop" >回顶部</el-button></div>

    </div>
</template>

<script>
import MainTitle from './MainTitle.vue';
import MainBody from './MainBody.vue';
// import TabHeader from './TabHeader.vue'
// import TabBody from './TabBody.vue';
export default {
    mounted () {
        //原生的事件绑定
        // this.$refs.default.addEventListener('scroll',this.setButton)
    },
    components : {
        MainTitle,MainBody
        // TabHeader,
        // TabBody
    },
    name : 'DefaultTab',
    data : function () {
        return {
            needShow :false,
            msg : '我来设置子组件头部'
        }
    },
    methods : {
        returnTop () {
            this.$refs.top.scrollIntoView(true, {
                behavior:'smooth'
            });
        },
        setButton (e,name) {
            console.log(e,name)
            //可优化
            if (e.target.scrollTop > 0) {
                this.needShow = true;
            } else {
                this.needShow = false;
            } 
            // 和上面的逻辑等价
            // this.needShow = this.$refs.default.scrollTop ;
        }
        
    },
    destroyed() {
        // this.$refs.default.removeEventListener('scroll',this.setButton)
    }
}
</script>

<style lang="scss" scoped>
.default {
    height: 100%;
    overflow-y: auto;
    padding: 0 20px;
}
.back {
    position: fixed;//相对窗口定位
    right:30px;//距右边10px
    bottom:8px;//距底部10px
}

</style>