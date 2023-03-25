import React from "react"

import './style.css'

export const Loader = () => {
  return (
    <div className="center">
      <div id="container">
        <svg viewBox="0 0 100 100">
          <defs>
            <filter id="shadow">
              <feDropShadow dx="0" dy="0" stdDeviation="1.5"
                flood-color="#C9E483" />
            </filter>
          </defs>
          <circle id="spinner" style={{
            fill: 'transparent',
            stroke: '#3C7B1E',
            strokeWidth: '7px',
            strokeLinecap: 'round',
          }} cx="50" cy="50" r="45" />
        </svg>
      </div>
    </div>
  )
}