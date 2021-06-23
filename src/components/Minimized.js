import React from 'react'

export default function Minimized({updateMinimized}) {
    return (
      <div className="minimized-widget">
          <div>Locations</div>
          <button className="btn">
            <i className="fas fa-angle-double-down" aria-hidden="true" onClick={updateMinimized}></i>
          </button>
      </div>
    )
}
