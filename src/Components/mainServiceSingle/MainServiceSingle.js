import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";
const MainServiceSingle = ({ mainSERVICE }) => {
  const { _id, img, serviceName, descriptios, Chamber, seviceIcon, fees } = mainSERVICE;
  return (
    <div>
      <div className="max-w-lg p-4 shadow-md bg-gray-50 text-gray-800">
        <div className="space-y-4">
          <div className="space-y-2">
            <PhotoProvider>
              <PhotoView src={img}>
              <img src={img} alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
              </PhotoView>
            </PhotoProvider>
            
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold text-pink-600">{serviceName}</h3>
            </a>
            <p className="leading-snug text-gray-600">{descriptios.slice(0, 100) + "...."}</p>
          </div>
          <button className="w-full py-3 px-6 rounded-md bg-orange-800 text-white">
          <Link to={`/services/${_id}`}>More Details</Link>
          </button>

        </div>
      </div>
    </div>
  );
};

export default MainServiceSingle;
