import React from 'react'

const Loader = ({ loaderUrl, loadingText }) => {
  return(
    <div className="app-loader">
      <img 
        src={loaderUrl} 
        alt="loader"
      />
      <div>
       {
         loadingText ? <div className="message-box">{loadingText}</div> : ''
       }
      </div>
    </div>
  )
}
export default Loader;
