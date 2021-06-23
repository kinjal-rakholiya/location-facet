import React from 'react'

export default function Header({collapsed, updateCollapsed, updateMinimized}) {
    return (
    <div className="header">
        <div>Locations</div>
        <div className="btngroup">
            <button className="btn">
                <i className={collapsed ? "far fa-square" : "fas fa-minus"} aria-hidden="true" onClick={updateCollapsed}></i>
            </button>
            <button className="btn">
                <i className="fas fa-arrow-to-left" aria-hidden="true" onClick={updateMinimized}></i>
            </button>
        </div>                
    </div>
    )
}
