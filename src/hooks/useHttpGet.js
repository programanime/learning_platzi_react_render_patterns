import { useState } from "react";
import { useEffect } from "react";

export function useHttpGet(url){
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState()
    const [data,setData] = useState([])
    
    useEffect(()=>{
        setTimeout(()=>{
            fetch(url).then(response => {
                return response.json()
            }).then(response=>{
                setData(response)
                setLoading(false)
                setError(false)
            }).catch(response => {
                setData([])
                setLoading(false)
                setError(response)
            });
        }, 1000);
    },[url]);
    
    return {loading,error,data};
}
