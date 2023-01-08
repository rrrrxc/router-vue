<template>
    <div :style="{color:color}">{{ title }}</div>
</template>

<script>
export default {
    name : 'TabHeader',
    props : ['title','color']
}
</script>