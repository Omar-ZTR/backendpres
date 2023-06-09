import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Orders.css";
import newRequest from "../../utils/newRequest";
import { useQuery } from "@tanstack/react-query";
import mesag from '../../img/message.png'
import cross from '../../img/cross.png'

const Orders = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();
  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      newRequest.get(`/orders`).then((res) => {
        return res.data;
      }),
  });

  const handleContact = async (order) => {
    const sellerId = order.sellerId;
    const buyerId = order.buyerId;
    const id = sellerId + buyerId;

    try {
      const res = await newRequest.get(`/conversations/single/${id}`);
      navigate(`/message/${res.data.id}`);
    } catch (err) {
      if (err.response.status === 404) {
        const res = await newRequest.post(`/conversations/`, {
          to: currentUser.seller ? buyerId : sellerId,
        });
        navigate(`/message/${res.data.id}`);
      }
    }
  };
  return (
    <div className="orders">
      {isLoading ? (
        "loading"
      ) : error ? (
        "error"
      ) : (
      <div className="container">
        <div className="titl">
          <h1>Orders</h1>
        </div>
        <table>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              {<th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>}
              <th>Contact</th>
            </tr>
            {data.map((order) => (
              <tr key={order._id}>
                <td>
                  <img className="image" src={order.img} alt="" />
                </td>
                <td>{order.title}</td>
                <td>{order.price}</td>
                <td>
                  <img
                    className="message"
                    src="./img/message.png"
                    alt=""
                    onClick={() => handleContact(order)}
                  />
                </td>
              </tr>
            ))}
          </table>
        {/* <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            {<th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>}
            <th>Date</th>
            <th>Customer</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Stunning concept art</td>
            <td>59</td>
            <td>2023/6/20</td>
            <td>Ahmed</td>
            <td>
              <img className="message" src={cross} alt="" />
              <img className="message" src={mesag} alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td> generated concept art</td>
            <td>79</td>
            <td>2023/6/20</td>
            <td>Fadi</td>
            <td>
              <img className="message" src={cross} alt="" />
              <img className="message" src={mesag} alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>High quality digital character</td>
            <td>110</td>
            <td>2023/6/4</td>
            <td>Aymen</td>
            <td>
              <img className="message" src={cross} alt="" />
              <img className="message" src={mesag} alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Illustration hyper realistic painting</td>
            <td>39</td>
            <td>2023/7/4</td>
            <td>Afsus</td>
            <td>
              <img className="message" src={cross} alt="" />
              <img className="message" src={mesag} alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Original ai generated digital art</td>
            <td>119</td>
            <td>2023/6/11</td>
            <td>Yoshi Tannamuri</td>
            <td>
              <img className="message" src={cross} alt="" />
              <img className="message" src={mesag} alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Text based ai generated art</td>
            <td>49</td>
            <td>2023/6/20</td>
            <td>Giovanni Rovelli</td>
            <td>
              <img className="message" src={cross} alt="" />
              <img className="message" src={mesag} alt="" />
            </td>
          </tr>
        </table> */}
      </div>
      )}
    </div>
  );
};

export default Orders;
