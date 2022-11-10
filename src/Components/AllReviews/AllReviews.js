import React, { useEffect, useState } from "react";
import SingleReview from "../SingleReview/SingleReview";
const AllReviews = () => {
  const [allRev, setAllRev] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/allReviews")
      .then((res) => res.json())
      .then((data) => setAllRev(data));
  }, []);
  console.log(allRev);

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Actions</th>
              <th>Service name & img</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>User Message</th>
              <th>Ratings</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {allRev.map((rev) => (
              <SingleReview key={rev._id} reviews={rev}></SingleReview>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllReviews;