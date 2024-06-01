import React from 'react';
import './SingleService.css';

const SingleServices = ({ allService }) => {
  const { _id, img, serviceName, descriptios, Chamber, seviceIcon } =
    allService;
  return (
    <div className="py-6">
      <div className=" p-4 text-justify rounded-md shadow-md bg-gray-50 text-gray-900">
        <img src={img} alt="/" className="w-full" />
        <div className="mt-6 mb-2">
          <h2 className="text-xl font-semibold tracking-wide">{serviceName}</h2>
        </div>
        <p className="text-gray-800">{descriptios.slice(0, 50)}</p>
      </div>
    </div>
  );
};

export default SingleServices;
