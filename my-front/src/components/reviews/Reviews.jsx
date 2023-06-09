import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import newRequest from "../../utils/newRequest";
import Review from "../Review/Review";
import "./Reviews.css";

const Reviews = ({ gigId }) => {
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery(["reviews", gigId], () =>
    newRequest.get(`/reviews/${gigId}`).then((res) => res.data)
  );

  const [reviewDesc, setReviewDesc] = useState("");
  const [reviewStar, setReviewStar] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const desc = reviewDesc;
    const star = reviewStar;
    newRequest
      .post("/reviews", { gigId, desc, star })
      .then(() => {
        queryClient.invalidateQueries(["reviews", gigId]);
        setReviewDesc("");
        setReviewStar(1);
      })
      .catch((error) => {
        console.error("Error adding review:", error);
      });
  };

  return (
    <div className="reviews">
      <h2>Reviews</h2>
      {isLoading
        ? "loading"
        : error
        ? "Something went wrong!"
        : data.map((review) => <Review key={review._id} review={review} />)}
      <div className="add">
        <h3>Add a review</h3>
        <form action="" className="addForm" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="write your opinion"
            value={reviewDesc}
            onChange={(e) => setReviewDesc(e.target.value)}
          />
          <select
            name=""
            id=""
            value={reviewStar}
            onChange={(e) => setReviewStar(Number(e.target.value))}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
