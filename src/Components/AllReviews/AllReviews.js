import React, { useEffect, useState } from 'react';
import SingleReviews from '../SingleReview/SingleReviews';
const AllReviews = () => {
  const [allRev, setAllRev] = useState([]);

  useEffect(() => {
    fetch('https://legal-aid-server.vercel.app/allReviews')
      .then(res => res.json())
      .then(data => setAllRev(data));
  }, []);

  return (
    <div className=" my-10 lg:px-32 md:px-24 px-16 w-full max-w-[1380px] mx-auto">
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
            {allRev.map((rev, idx) => (
              <SingleReviews key={rev._id} idx={idx} rev={rev}></SingleReviews>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllReviews;
