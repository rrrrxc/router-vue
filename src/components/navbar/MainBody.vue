<template>
    <div class="container">
        <!-- <el-table :data="tableData1" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
        </el-table> -->

        <el-table  stripe :data="tableData2">
            <el-table-column prop="property" label="今日属性">
            </el-table-column>
            <el-table-column prop="value" label="现状">
            </el-table-column>
        </el-table>

    </div>
</template>

<script>
export default {
    name: 'MainBody',
    data: function () {
        return {
            // tableData1: 
            // [
            //     { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
            //     {date: '2016-05-04',name: '王小虎',address: '上海市普陀区金沙江路 1517 弄'}, 
            //     {date: '2016-05-01',name: '王小虎',address: '上海市普陀区金沙江路 1519 弄'}, 
            //     {date: '2016-05-03',name: '王小虎',address: '上海市普陀区金沙江路 1516 弄'}
            // ],
            tableData2:
            [
                {property:'天气情况',value:'🌧'},
                {property:'今日温度',value:'10℃'},
                {property:'明天温度',value:'30℃'},
                {property:'穿什么',value:'短袖'}
            ]
        }
    }
}

</script>


<style lang="scss" scoped >
.container {}
</style>