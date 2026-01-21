import React from 'react'

const ReviewCard = ({el}) => {
  return (
    <div className="reviewCard">
            <img src={el.path} alt="" />
            <div className="reviewText">
                <h3>{el.name}</h3>
                <p>{el.text}</p>
            </div>
        </div>
  )
}

export default ReviewCard