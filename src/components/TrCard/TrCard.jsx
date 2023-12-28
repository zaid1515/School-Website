import React from 'react'

function TrCard(props) {
  return (
    <div className="tr-card">
      <div className="tr-img">
<img src={props.imgpath} alt="" />
      </div>
      <div className="single-tr-details">
        <h2 className="tr-name">{props.name}
        </h2>
        <h3 className="tr-post">{props.post}</h3>
      </div>
    </div>
  )
}

export default TrCard