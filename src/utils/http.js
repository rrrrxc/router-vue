import axios from 'axios'

const MOCK_URL ='http://127.0.0.1:4523/m1/2032455-0-default'

// const PRODUCTION_URL = 'http://jisutqybmf.market.alicloudapi.com'

//创建实例
const http = axios.create (
    {
        baseURL: MOCK_URL,
        timeout:1000,//超过一秒请求被取消
        headers: {
            Authorization: 'APPCODE 124567893asdfghjk'//授权字段
        }
    }
)
export {
    http
}