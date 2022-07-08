import { useState } from "react";

export function useStorageListener(){
    const [storageChanged,setStorageChanged]=useState(false)
    
    window.addEventListener("storage", (change)=>{
        if(change.key === "todos"){
            console.log("hubo cambios");
            setStorageChanged(true);
        }
    })
        
    return [show,toggle];
}
