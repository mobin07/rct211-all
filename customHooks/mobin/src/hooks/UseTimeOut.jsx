import  { useEffect, useState } from 'react'

const UseTimeOut= () => {
    const [ready,setReady]= useState(false)

useEffect(()=>{
let timer=setTimeout(()=>[
  setReady(true)
],3000);
return clearTimeout({timer});

},[]);


return ready;
 
  
}

export {UseTimeOut}