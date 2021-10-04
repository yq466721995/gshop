/*
  ajax请求函数模块
*/
import axios from "axios";

export default function ajax(url, data={}, type="GET") {

  return new Promise(function (resolve,reject) {
    let promise
    if(type==="GET"){
      // 准备 url query 参数数据
      let dataStr = ''  //数据拼接字符串
      Object.keys(data).forEach(key => {//Object.keys()将对象的属性名变成数组
        dataStr += key + '=' + data[key] + '&'
      })
      if(dataStr !== ''){
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      //发送get请求
      promise = axios.get(url)
    }else{
      //发送post请求
      promise = axios.post(url,data)
    }

    promise.then(response => {
      //请求成功调用resolve
      resolve(response.data)
    }).catch(error => {
      //失败调用reject
      reject(error)
    })
  })
}
