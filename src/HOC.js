import React from 'react'

let access = false
function HOC(Children) {
  return function(){
    if(access){
        return <Children />
    }else{
        return "no access home , about"
    }
  }
}

export default HOC