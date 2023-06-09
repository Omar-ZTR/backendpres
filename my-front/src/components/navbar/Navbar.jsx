import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbare.css";
import newRequest from "../../utils/newRequest";
import noav from "../../img/noavatar.jpg"
// import NavDash from "../../Admin/Components/NavDash";


function Navbar() {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);

    const { pathname } = useLocation();

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", isActive);
        return () => {
            window.removeEventListener("scroll", isActive);
        };
    }, []);

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    // const currentUser = {
    //     id: 1,
    //     username: "Anna",
    //     isSeller: true,
    //   };

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await newRequest.post("/auth/logout");
            localStorage.setItem("currentUser", null);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };

    return (

        <div className={active || pathname !== "/" ? "navbare active" : "navbare"}>
            <div className="containe">

                <div className="logonav">
                    <Link className="link" to="/">
                        <span className="textlogonav">Give</span>
                    </Link>
                    <span className="dotnav">&</span>
                    <span className="textlogonav">Get</span>
                </div>
                <div className="links">
                    <span>GAG Business</span>
                    <span>Explore</span>

                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    {currentUser ? (
                        <div className="user" onClick={() => setOpen(!open)}>
                            <img
                                src={currentUser.img || noav} alt=""
                            />
                            <span>{currentUser?.username}</span>
                            {open && (
                                <div className="options">
                                    {currentUser.isSeller && (
                                        <>
                                            <Link className="link" to="/mygigs">
                                                Gigs
                                            </Link>
                                            <Link className="link" to="/add">
                                                Add New Gig
                                            </Link>
                                        </>
                                    )}
                                    <Link className="link" to="/orders">
                                        Orders
                                    </Link>
                                    <Link className="link" to="/messages">
                                        Messages
                                    </Link>
                                    <Link className="link" onClick={handleLogout}>
                                        Logout
                                    </Link>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <Link to="/login" className="link">Sign in</Link>
                            <Link className="link" to="/register">
                                <button>Join</button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
            {(active || pathname !== "/") && (
                <>
                    <hr />
                    <div className="menu">
                        <Link className="link menuLink" to="/gigs">
                            Appliance repair
                        </Link>
                        <Link className="link menuLink" to="/gigs">
                            repair & maintenance
                        </Link>
                        <Link className="link menuLink" to="/gigs">
                            Art

                        </Link>
                        <Link className="link menuLink" to="/gigs">
                            cleaning

                        </Link>
                        <Link className="link menuLink" to="/gigs">
                            transport

                        </Link>
                        <Link className="link menuLink" to="/gigs">
                            Auto service

                        </Link>
                        <Link className="link menuLink" to="/gigs">
                            Programming & Tech
                        </Link>
                        <Link className="link menuLink" to="/gigs">
                            Textile
                        </Link>
                        <Link className="link menuLink" to="/gigs">
                            beauty
                        </Link>

                    </div>

                </>
            )}
        </div>
    );
}

export default Navbar;
