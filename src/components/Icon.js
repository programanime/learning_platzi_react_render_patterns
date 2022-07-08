import React from "react";

export function Icon({name = "check",onClick}) {
    return (
        <span className="icono material-icons md-24" onClick={onClick} >
            <span className="material-icons-outlined">
                {name}
            </span>
        </span>
    );
}