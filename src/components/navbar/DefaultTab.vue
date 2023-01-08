<template>
    <div class='default' ref="default"  @scroll="setButton($event,'哈哈哈')">
    <div ref="top">
        <tab-header :title="msg" color="red"/>
        <tab-header title="这是第二个父亲传递的" color="green"/>
    </div>
    <div class="body">
        <tab-body>
            <h1>匿名插槽</h1>
            <template v-slot:header>
                <h1 >具名插槽</h1>
            </template>
        </tab-body>
    </div>
    <div v-show='needShow' class="back"><el-button type="primary"  @click="returnTop" >回顶部</el-button></div>
    </div>
</template>

<script>
import TabHeader from './TabHeader.vue'
import TabBody from './TabBody.vue';
export default {
    mounted () {
        //原生的事件绑定
        // this.$refs.default.addEventListener('scroll',this.setButton)
    },
    components : {
        TabHeader,
        TabBody
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
}
.back {
    position: fixed;//相对窗口定位
    right:30px;//距右边10px
    bottom:8px;//距底部10px
}

</style>