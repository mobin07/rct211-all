
import { useEffect } from 'react';
import { useState } from 'react'

const useFetch = (url) => {
const [loading,setLoading]=useState(true);
const [error,setError]=useState(false);
const [data,setData]=useState([]);

const fetchDtata=()=>{
    
fetch(url).then(res=>res.json()).then(res=>(setData(res.data),setLoading(false))).catch(err=>(setError(true),setLoading(false)))
}

useEffect(()=>{
    fetchDtata();
},[url])

return [loading,error,data]
}

export default useFetch