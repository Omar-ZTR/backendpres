import React from 'react'

const Card = () => {
  return (
    <div> <div className="main__cards">
    <div className="card">
      <i
        className="fa fa-user-o fa-2x text-lightblue"
        aria-hidden="true"
      ></i>
      <div className="card_inner">
        <p className="text-primary-p">Number of Seller</p>
        <span className="font-bold text-title">5</span>
      </div>
    </div>

    <div className="card">
      <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
      <div className="card_inner">
        <p className="text-primary-p">Number of Customer</p>
        <span className="font-bold text-title">6</span>
      </div>
    </div>

    <div className="card">
      <i
        className="fa fa-video-camera fa-2x text-yellow"
        aria-hidden="true"
      ></i>
      <div className="card_inner">
        <p className="text-primary-p">Number of Orders</p>
        <span className="font-bold text-title">34</span>
      </div>
    </div>

    <div className="card">
      <i
        className="fa fa-thumbs-up fa-2x text-green"
        aria-hidden="true"
      ></i>
      <div className="card_inner">
        <p className="text-primary-p">Number of Requests</p>
        <span className="font-bold text-title">4</span>
      </div>
    </div>
  </div></div>
  )
}

export default Card