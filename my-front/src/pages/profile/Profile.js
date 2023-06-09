import React from 'react'
import"../profile/Profile.css"
const Profile = () => {
  return (
    

  

        <div className="profile">
          <div >
            {/* Column */}
            <div className="card"> 
            <img className="card-img-top" src="https://i.imgur.com/K7A78We.jpg" alt="Card image cap" />
              <div className="card-body little-profile text-center">
                <div className="pro-img"><img src="https://i.imgur.com/8RKXAIV.jpg" alt="user" /></div>
                <h3 >Omar zouiter</h3>
                <p>Elictrecien</p> <a href="javascript:void(0)" className="m-t-10 waves-effect waves-dark btn btn-primary btn-md btn-rounded" data-abc="true">Edit Profile</a>
                <div className="ORM">
                  <div >
                    <h3 >12</h3><span>Orders</span>
                  </div>
                  <div >
                    <h3 >4</h3><span>Rating</span>
                  </div>
                  <div >
                    <h3>10</h3><span>Messages</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  
    
  };
export default Profile