import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../UserContext/UserContext';

const SpecificsReviews = ({specific}) => { 
    const {user} = useContext(AuthContext);
    console.log(specific)
    const { Name, email,PhotoUrl,Ratings,Message,serviceName } = specific;
    const [rev , setReviews] =useState([])

    useEffect(()=>{
        fetch('https://legal-aid-server.vercel.app/allReviews')
        .then(res => res.json())
        .then(data => setReviews(data))
      },[rev])
    return (
        <div>
            <div className="container flex flex-col w-full p-6  rounded-md divide-gray-300 bg-gray-50 text-gray-800">
            <div className="flex justify-between  p-4">
              <div className=" space-x-4 flex ">
                <div>
                  <img
                    src={user?.PhotoUrl}
                    alt=""
                    className="object-cover w-12 h-12 rounded-full bg-gray-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{user?.displayName} reviewd for {specific.serviceName}</h4>
                </div>
              </div>
              <div className="rating rating-sm">
                <span>{specific.Ratings}</span>
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm text-gray-600">
              <p>
               {specific.Message}
              </p>
              <p>
               {specific.Message}
              </p>
            </div>
          </div>
        </div>
    );
};

export default SpecificsReviews;