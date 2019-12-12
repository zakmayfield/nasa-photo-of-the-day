import React from 'react'

const ImageDisplay = (props) => {
  return (
    <div className="image">
      <img src={props.hdurl} alt=''/>
    </div>
  )
}

export default ImageDisplay