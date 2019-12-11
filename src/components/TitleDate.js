import React from 'react'

const TitleDate = (props) => {
  return (
    <div className="title-date-container">
      <div className="title-container">
        <p>{props.title}</p>
      </div>

      <div className="date-container">
        <p>{props.date}</p>
      </div> 
    </div>
  )
}

export default TitleDate