import React, { useEffect, useRef, useState } from "react";
import "./Services.css";
import ServCard from "../../components/servCard/ServCard";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { Link, useLocation } from "react-router-dom";
// import { gigs } from "../../data";
import down from'../../img/down.png'
function Services() {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const { search } = useLocation()


  const { isLoading, error, data, refetch } = useQuery({


    queryKey: ['gigs'],
    queryFn: () =>
      newRequest.get(`/gigs${search}`).then((res) => {
        return res.data;
      }),
  });
  // &min=${minRef.current.v}&max=${maxRef.current.value}&sort=${sort}
  console.log(data);

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  // useEffect(() => {
  //   refetch();
  // },[sort]);
  const apply = () => {
    refetch();
  }

  return (
    <div className="gigs">
      <div className="container">
        {/* <div className="souscat">
          <div className="soubut">
        <Link className="link menuLink" to="/gigs">
                        Réparation électroménager                    
                            </Link></div>
                        <Link className="link menuLink" to="/gigs">
                        Entretien et réparation
                        </Link>
                        <Link className="link menuLink" to="/gigs">
                        Art

                        </Link>
                        <Link className="link menuLink" to="/gigs">
                        Menage et nettoyage

                        </Link>
                        <Link className="link menuLink" to="/gigs">
                        Beauty

                        </Link>
                        <Link className="link menuLink" to="/gigs">
                        Services auto

                        </Link>
                        <Link className="link menuLink" to="/gigs">
                            Programming & Tech
                        </Link>
                        <Link className="link menuLink" to="/gigs">
                        Textile
                        </Link>
                        <Link className="link menuLink" to="/gigs">
                            Lifestyle
                        </Link>
        </div> */}
        <span className="breadcrumbs">Get service Appliance repair </span>
        <h1>Appliance repair</h1>
        {/* <p>
          Explore the boundaries of art and technology with Liverr's AI artists
        </p> */}
        <hr/>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input ref={minRef} type="number" placeholder="min" />
            <input ref={maxRef} type="number" placeholder="max" />
            <button onClick={apply}>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort by</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img src={down} alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
                <span onClick={() => reSort("sales")}>Popular</span>
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {isLoading ? "loading" : error ? " something wrong!" : data.map((gig) =>
            <ServCard key={gig._id} item={gig} />
          )}
          {/* {gigs.map((gig) => (
            <ServCard key={gig.id} item={gig} />
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default Services;
