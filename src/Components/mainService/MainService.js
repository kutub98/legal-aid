import React from "react";
import { useLoaderData } from "react-router-dom";
import MainServiceSingle from "../mainServiceSingle/MainServiceSingle";
import "./MainServices.css";

const MainService = () => {
  const allServices = useLoaderData();
  //   console.log(allServices);
  return (
    <div>
      <div className="servicesSections relative mb-20">
        <div className="text absolute">
          <h1 className="text-5xl text-white font-extrabold">Our Services</h1>
        </div>
      </div>
      <div className=" grid lg:grid-cols-3 grid-cols-1 gap-8 px-[10%] MainService ">
        {allServices.map((serviceS) => (
          <MainServiceSingle key={serviceS._id} mainSERVICE={serviceS}></MainServiceSingle>
        ))}
      </div>
    </div>
  );
};

export default MainService;
