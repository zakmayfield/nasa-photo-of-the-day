import React from 'react'

const Title = (props) => {
  return (
    <div className="sub-title-container">
      <p>NASA's photo of the day:</p>
      <p>{props.title}</p>
    </div>
  )
}

export default Title