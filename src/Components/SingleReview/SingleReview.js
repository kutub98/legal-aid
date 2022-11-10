import React, { useEffect, useState } from 'react';
import { BsFillTrashFill } from "react-icons/bs";
const SingleReview = ({reviews}) => {
    let count= 1;
    
    
    const [Name,img, email,PhotoUrl,Ratings,Message,serviceName ] =reviews;
   
    return (
        
            <tr>
                 <th>{count ++}</th>
              <th className=" p-2">
              <button value="" className='bg-red-600 p-2 text-white mx-3'>Edit</button>
               <button> <BsFillTrashFill className=" p-1 bg-yellow-700 text-lg text-white" /></button>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={PhotoUrl} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{serviceName}</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
              </td>
              <td>Purple</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
              <th>
                <button className="btn btn-ghost btn-xs">Rating Point</button>
              </th>
              <th>
              
                <select name="" id="" className='bg-red-600 p-2 text-white'>
                  <option value="">Pending</option>
                  <option value="">Approved</option>
                </select>
              </th>
            </tr>
            
    );
};

export default SingleReview;