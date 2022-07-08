import React from "react";
import { withStorageListener } from "../hoc/withStorageListener";


export function ChangeAlert({show,toggle}) {
    if(show){
        return <p>there is a achange?</p>;  
        <button onClick={() => toggle(false)}>Refresh info</button>
    }
    return React.Fragment;
}

export const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);