import React, { useEffect, useState } from "react";
import SingleReviews from "../SingleReview/SingleReviews";
const AllReviews = () => {
  const [allRev, setAllRev] = useState([]);

  useEffect(() => {
    fetch("https://legal-aid-server.vercel.app/allReviews")
      .then(res => res.json())
      .then(data => setAllRev(data));
  }, []);
  console.log(allRev);

  return (
    <div className="px-[8%]">
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
            {allRev.map((rev, idx) => <SingleReviews key={rev._id} idx= {idx} rev={rev}></SingleReviews>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllReviews;
