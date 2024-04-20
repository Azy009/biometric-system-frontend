
const tokenstore = (value)=>{
  localStorage.setItem('biotoken',JSON.stringify(value))
}

const gettoken = ()=>{
  let data = localStorage.getItem('biotoken')
  return JSON.parse(data)
}

 const removeToken = ()=>{
  localStorage.removeItem('biotoken')
    }

  export {tokenstore,gettoken,removeToken }

  