import React from 'react'
import "./LoadingSpinner.scss"

function LoadingSpinner() {
  return (
    <div className="main">
      <div className="spinner-container d-flex justify-content-center align-items-center mt-5 mb-5">
        <div className="loading-spinner">
        </div>
      </div>
    </div>
  )
}

export default LoadingSpinner