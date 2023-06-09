import React from "react";
import "./ServCard.css";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import noav from "../../img/noavatar.jpg"
import heart from "../../img/heart.png"
import stars from "../../img/star.png"
import man from "../../img/mman.png"

const ServCard = ({ item }) => {

  
  const { isLoading, error, data } = useQuery({


    queryKey: ['gigUser'],
    queryFn: () =>
      newRequest.get(`/users/${item.userId}`).then((res) => {
        return res.data;
      }),
  });
  return (
    <Link to={`/gig/${item._id}`} className="link">
      <div className="gigCard">
        <img src={item.cover} alt="" />
        <div className="info">
          {isLoading ? ("loading") :
          error ? (
            "something wrong!"
          ) : ( <div className="user">
            <img src={data.img || {noav}} alt="" />
            <span>{data.username}</span>
          </div>)}
          <p>{item.desc}</p>
          <div className="star">
            <img src={stars} alt="" />
            <span >{!isNaN(item.totalStars / item.starNumber) &&
             Math.round(item.totalStars / item.starNumber)|| "0"}</span>
        
          </div>
        </div>
        <hr />
        <div className="detail">
          <img src={heart} alt="" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>
              dt {item.price}
              {/* <sup>99</sup> */}
            </h2>
          </div>
        </div>
      </div>
    </Link>




    // <Link to="/gig/123" className="link">
    //   <div className="gigCard">
    //     <img src={item.img} alt="" />
    //     <div className="info">
    //       <div className="user">
    //         <img src={item.pp} alt="" />
    //         <span>{item.username}</span>
    //       </div>
    //       <p>{item.desc}</p>
    //       <div className="star">
    //         <img src={stars} alt="" />
    //         <span>{item.star}</span>
    //       </div>
    //     </div>
    //     <hr />
    //     <div className="detail">
    //       <img src={heart} alt="" />
    //       <div className="price">
    //         <span>STARTING AT</span>
    //         <h2>
    //           dt {item.price}
              
    //         </h2>
    //       </div>
    //     </div>
    //   </div>
    // </Link>
  );
};

export default ServCard ;
