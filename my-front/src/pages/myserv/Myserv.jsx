import React from "react";
import { Link } from "react-router-dom";
import "./Myserv.css";
import getCurrentUser from "../../utils/getCurrentUser";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import delet from "../../img/delete.png"
function Myserv() {
  const currentUser = getCurrentUser();
  // const currentUser = useSelector((state) => state.user.currentUser);
  // const currentUser = () => {
  //   return JSON.parse(localStorage.getItem("currentUser"));
  // };
  // const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const queryClient = useQueryClient();

  const { isLoading, error, data, refetch } = useQuery(["myGigs"], () =>
    newRequest.get(`/gigs?userId=${currentUser._id}`).then((res) => res.data)
  );
 console.log(currentUser)
  // const mutation = useMutation({
  //   mutationFn: (id) => {
  //     return newRequest.delete(`/gigs/${id}`);
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(["myGigs"]);
  //   },
  // });

  // const handleDelete = (id) => {
  //   mutation.mutate(id);
  // };
  const handleDelete = async (id) => {
    try {
      await newRequest.delete(`/gigs/${id}`);
      queryClient.invalidateQueries(["myGigs"]);
      refetch();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="myserv">
      {isLoading ? (
        "loading"
      ) : error ? (
        "error"
      ) : (
        <div className="container">
          <div className="titl">
            <h1>Services</h1>
            {currentUser.isSeller && (
              <Link to="/add">
                <button>Add New Service</button>
              </Link>
            )}
          </div>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Sales</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((gig) => (
                <tr key={gig._id}>
                  <td>
                    <img className="image" src={gig.cover} alt="" />
                  </td>
                  <td>{gig.title}</td>
                  <td>{gig.price}</td>
                  <td>{gig.sales}</td>
                  <td>
                    <img
                      className="delete"
                      src={delet}
                      alt=""
                      onClick={() => handleDelete(gig._id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Myserv;
