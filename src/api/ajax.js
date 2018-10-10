import axios from "axios"

export default function ajax(url,data={},type="GET") {
  return new Promise((resolve,reject)=>{
    let promise
    if(type==='GET') { // 发送GET请求
      // 拼请求参数串
      // data: {username: tom, password: 123}
      // paramStr: username=tom&password=123
      let paramStr = ''
      Object.keys(data).forEach(key => {
        paramStr += key + '=' + data[key] + '&'
      })
      if(paramStr) {
        paramStr = '?' +paramStr.substring(0, paramStr.length-1)
      }
      // 使用axios发get请求
      promise = axios.get(url + paramStr)
    } else {// 发送POST请求
      // 使用axios发post请求
      promise = axios.post(url, data)
    }
    promise.then(response=> {
      console.log(response.data)
      resolve(response.data)
    }).catch(error=> {reject(error)})

  })
}
