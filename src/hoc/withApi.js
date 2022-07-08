import { useState } from "react";
import { useEffect } from "react";

export function withApi(url, Component){
    return function Wrapper(props){
        const [data,setData]=useState([])
        useEffect(() => {
            fetch(url).then(response => {
                return response.json()
            }).then(response=>{
                setData(response);
            }).catch(response => {
                
            });
        },[])
        props.data=data;
        return (
            <>
                <p>HOC</p>
                <Component {...props} />
            </>
        )
    }
}