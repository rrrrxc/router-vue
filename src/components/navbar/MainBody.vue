<template>
    <div class="container">

        <div>
            <el-input v-model="city"/>
            <el-button @click="getWeather">{{$t('msg.search')}}</el-button>
        </div>
        
        <el-table  stripe :data="tableData">
            <el-table-column prop="name" :label="$t('msg.weatherItem')">
            </el-table-column>

            <el-table-column prop="property" :label="$t('msg.key')">
            </el-table-column>

            <el-table-column prop="value" :label="$t('msg.current')">
                <template v-slot:default="scoped">
                    <img  :src="imgFormatByPublic(scoped.row.value)" v-if="scoped.row.property === 'img' "/>
                    <div v-else> {{ scoped.row.value  }} </div>
                </template>
            </el-table-column>
        </el-table>

    </div>
</template>

<script>
import { http } from '@/utils/http'
const keyMap = {
    img: '天气图片',
    city:'城市',
    cityid:'城市ID',
    citycode:'城市代码',
    date:'日期',
    humidity:'湿度',
}
export default {
    name: 'MainBody',
    data: function () {
        return {
            tableData:
            [
             
            ],
            city:'',
            imgUrl:require('@/assets/weather-Icon/1.png'),
        }
    },
    mounted () {
    //    this.getWeather()
    },
    methods : {
        imgFormat (imgNum) {
            return require(`@/assets/weather-Icon/${imgNum}.png`)
        },
        imgFormatByPublic(imgNum) {
            return `/weather-Icon/${imgNum}.png`
        },
        view (scoped) {
            console.log(scoped);
            return '666'
        },
        async getWeather () {
            //黑名单数组
            const removeKey = ['index','aqi','daily','hourly','week','weather','temp','temphigh','templow']
            const { data }= await http.get('/weather/query', {params : {city: this.city}})
            console.log(data.result)
            const tmp = []
            Object.entries(data.result).forEach(([key,value]) => {
                console.log(key,value)
                //筛选
                if(!removeKey.includes(key))
                {
                    tmp.push({property:key , value:value,name:keyMap[key]})
                }
            })
            this.tableData = tmp;
        }
    }
}

</script>


<style lang="scss" scoped >
.container {}
</style>