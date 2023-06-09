import React, { useState } from "react";
import "./Featured.css";
import mman from "../../img/mman.png"
import search from "../../img/search.png"
import { useNavigate } from "react-router-dom";
function Featured() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/gigs?search=${input}`);
  };
  return (
    <div className="featured">
      <div className="containe">
        <div className="sleft">
          <h1>
            Discover the perfect  <span>service provider</span> for your business.
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src={search} alt="" />
              <input
                type="text"
                placeholder='Try "building mobil app"'
                onChange={(e) => setInput(e.target.value)}
              />            </div>
            <button onClick={handleSubmit}>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Auto service</button>
            <button>transport</button>
            <button>Beauty</button>
           
          </div>
        </div>
        <div className="sright">
          <img src={mman} alt="" />

        </div>
      </div>
    </div>
  );
}

export default Featured;
