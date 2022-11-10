import React, { useEffect, useState } from "react";
import SingleReviews from "../SingleReview/SingleReviews";
const AllReviews = () => {
  const [allRev, setAllRev] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/allReviews")
      .then(res => res.json())
      .then(data => setAllRev(data));
  }, []);
  console.log(allRev);
  const entries = Object.entries(allRev);

console.log(entries);


  return (
    <div>
      {
        entries.map(rev => <SingleReviews key={rev._id} rev={rev}></SingleReviews>)
      }
    </div>
  );
};

export default AllReviews;
