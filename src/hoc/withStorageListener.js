import { useState } from "react";

export function withStorageListener(WrappedComponent){
    return function WrappedWithStorageListener(props){
        const [storageChanged,setStorageChanged]=useState(false)
        
        window.addEventListener("storage", (change)=>{
            if(change.key === "todos"){
                console.log("hubo cambios");
                setStorageChanged(true);
            }
        })
        
        return (<WrappedComponent 
            show={storageChanged} 
            toggle={setStorageChanged}
            {...props} 
        />);
    }
}
