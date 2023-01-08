<template>
    <div>
        <!-- 匿名插槽 -->
        <slot></slot>
        <!-- 具名插槽 -->
        <div class="header"  :style="{color:colorhere}">
            <slot name="header" :user="user"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name : 'TabBody',
    data:function () {
        return {
            colorhere:'red',
            user:{
                name:'rxc'
            }
        }
    }
}
</script><!--  -->

<style lang="scss" scoped>
// .header {
//     color:red
// }
</style>