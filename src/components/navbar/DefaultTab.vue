<template>
    <div class='default' ref="default">
    <div ref="top">默认导航栏</div>
    <div style="height:1000px;background-color:grey"></div>
    <div v-show='needShow' class="back"><el-button type="primary"  @click="returnTop" >回顶部</el-button></div>
    </div>
</template>

<script>
export default {
    mounted () {
        this.$refs.default.addEventListener('scroll',this.setButton)
    },
    name : 'DefaultTab',
    data : function () {
        return {
            needShow :false,
        }
    },
    methods : {
        returnTop () {
            this.$refs.top.scrollIntoView(true, {
                behavior:'smooth'
            });
        },
        setButton () {
            //可优化
            // if (this.$refs.default.scrollTop > 0) {
            //     this.needShow = true;
            // } else {
            //     this.needShow = false;
            // } 
            // 和上面的逻辑等价
            this.needShow = this.$refs.default.scrollTop ;
        }
        
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