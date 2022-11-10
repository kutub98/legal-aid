import React, { useEffect, useRef, useState } from "react";
import img1 from "../../assets/Bg/bg1.jpg";
import img2 from "../../assets/Bg/bg3.jpg";
import img3 from "../../assets/Bg/1 (1).jpg";
import "./Banner.css";

import { FaPhoneAlt } from "react-icons/fa";
import Lottie from "lottie-web";
import SingleServices from "../SingleServices/SingleServices";
import { Link } from "react-router-dom";

const Banner = () => {
  const container = useRef(null);
  const [allServices, setServices] = useState([]);
  // const sorted = allServices.sort((a, b) => b-a)
  // const sorted = allServices.sort((a, b) => (a > b ? -1 : 1))
  const sortedAllServices = allServices.sort().reverse()

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../law.json"),
      rendererSettings: {
        context: container, // the canvas context
        scaleMode: "noScale",
        clearCanvas: false,
        progressiveLoad: false, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.
        hideOnTransparent: true, //Boolean, only svg renderer, hides elements when opacity reaches 0 (defaults to true)
      },
    });
  }, []);
  useEffect(() => {
    fetch("http://localhost:5001/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(allServices);
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full h-[500px] ">
          <img src={img1} alt="/" className="w-full h-[100%] absolute" />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5  top-1/2">
            <div className="w-2/3 pl-20 sliderText">
              <h3 className="text-white mt-2">আপনার কি আইনি সহায়তা প্রয়োজন?</h3>
              <h1 className="text-white mt-2">আমরা অধিকারের জন্য লড়াই করি</h1>
              <p className="text-white mt-2">
                আমরা কঠোর পরিশ্রমী । আমরা সকলের তরে দাড়াই যাতে সবাই সুন্দর জীবন ও জীবিকা নির্বাহ করতে পারে এবং
                অর্থনীতিতে সমানভাবে অংশগ্রহণ করতে পারে।
              </p>
              <button className="bg-white py-3 px-4 rounded-lg mt-2">আরো জানতে....</button>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} alt="/" className="w-full h-[100%] absolute" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5  top-1/2">
            <div className="w-2/3 pl-20 sliderText">
              <h3 className="text-white mt-2">আপনার কি আইনি সহায়তা প্রয়োজন?</h3>
              <h1 className="text-white mt-2">আমরা অধিকারের জন্য লড়াই করি</h1>
              <p className="text-white mt-2">
                আমরা কঠোর পরিশ্রমী । আমরা সকলের তরে দাড়াই যাতে সবাই সুন্দর জীবন ও জীবিকা নির্বাহ করতে পারে এবং
                অর্থনীতিতে সমানভাবে অংশগ্রহণ করতে পারে।
              </p>
              <button className="bg-white py-3 px-4 rounded-lg mt-2">আরো জানতে....</button>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-[500px]">
          <img src={img3} alt="/" className="w-full h-[100%] absolute" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5  top-1/2">
            <div className="w-2/3 pl-20 sliderText">
              <h3 className="text-white mt-2">আপনার কি আইনি সহায়তা প্রয়োজন?</h3>
              <h1 className="text-white mt-2">আমরা অধিকারের জন্য লড়াই করি</h1>
              <p className="text-white mt-2">
                আমরা কঠোর পরিশ্রমী । আমরা সকলের তরে দাড়াই যাতে সবাই সুন্দর জীবন ও জীবিকা নির্বাহ করতে পারে এবং
                অর্থনীতিতে সমানভাবে অংশগ্রহণ করতে পারে।
              </p>
              <button className="bg-white py-3 px-4 rounded-lg mt-2">আরো জানতে....</button>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full h-[500px]">
          <img src={img1} alt="/" className="w-full h-[100%] absolute" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5  top-1/2">
            <div className="w-2/3 pl-20 sliderText">
              <h3 className="text-white mt-2">আপনার কি আইনি সহায়তা প্রয়োজন?</h3>
              <h1 className="text-white mt-2">আমরা অধিকারের জন্য লড়াই করি</h1>
              <p className="text-white mt-2">
                আমরা কঠোর পরিশ্রমী । আমরা সকলের তরে দাড়াই যাতে সবাই সুন্দর জীবন ও জীবিকা নির্বাহ করতে পারে এবং
                অর্থনীতিতে সমানভাবে অংশগ্রহণ করতে পারে।
              </p>
              <button className="bg-white py-3 px-4 rounded-lg mt-2">আরো জানতে....</button>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      <div className="aboutUs grid gap-8 grid-cols-1 lg:grid-cols-2">
        <div class="">
          <h4 class="my-3">বাংলাদেশের আইন সংস্থা সম্পর্কে</h4>
          <h3 class="my-3">আমরাই লিগ্যাল কোম্পানি পরিচালনা করি</h3>
          <p class="mb-4 text-justify">
            আপনি কি আইনি সহায়তা খুঁজছেন? অথবা চাইছেন আইনি পরামর্শ? আপনার আইনি জিজ্ঞাসার উত্তর দিতেই আপনি কি আইনি সহায়তা
            খুঁজছেন? অথবা চাইছেন আইনি পরামর্শ? আপনার আইনি জিজ্ঞাসার উত্তর দিতেই আমাদের এই প্রচেষ্টা। আপনার পাচ্ছেন
            বিনামূল্যে আইন সহায়তা। প্রশ্ন করতে পারেন আইন ও আইনের সঙ্গের সংশ্লিষ্ট বিষয় নিয়ে। আপনাদের সেবা দিতে আমরা
            সর্বাত্মক প্রচেষ্টা করবো। আমাদের আই বিনামূল্যের আইন সহায়তায় থাকছে, সাধারণ আইনি বিষয়ে জিজ্ঞাসা ও উত্তর, আইনের
            সাধারণ আলোচনা, কোন বিষয়ে প্রাথমিক আইন পরামর্শ ইত্যাদি। আমাদের এই সেবাটি একটি স্বেচ্ছাশ্রম ভিত্তিক সেবা যা
            আমদের আমাদের প্যানেল আইনজীবী ও এডভোকেটরা অবসর সময় প্রদান করে থাকেন। এই সেবায় আপনার জটিল বিষয়ে, বিশেষ আইনি
            বিষয়ে, দলিল, জাগয়া-জমিন ও কৌশলগত বিষয়ে বিষয়ে পরামর্শ দেওয়া হয় না কারণ তা বাস্তবভিত্তিক ভাবে সম্ভব নয়।
            তাছাড়া আপনি যদি ইতোমধ্যে কোন বিজ্ঞ আইনজীবীর কাছ থেকে সেবা নিয়ে থাকেন তবে সে ক্ষেত্রেও আমাদের এই সেবা আপনার
            জন্য প্রযোজ্য নয়।
          </p>
          <h5 class="just">যেকোন সহায়তা পেতে কল করুন</h5>

          <div class="justCall">
            <i class="fa-sharp fa-solid fa-phone icon"></i>
            <p className="flex items-center my-2">
              {" "}
              <FaPhoneAlt /> +88018XXXXXXXXXXXX অথবা +88018XXXXXXXXXXXX
            </p>
          </div>
        </div>

        <div class="aboutImgRightSide">
          <div className="LottieFiles w-full" ref={container}></div>
        </div>
      </div>

      <div className="serviceBox justify-center block items-end">
      <h1 className="text-center text-3xl font-bold my-5">Our Service</h1>
        <div className="servicesAtHome grid lg:grid-cols-3 grid-cols-1 gap-6">
          {sortedAllServices.slice(0, 3).map((sService) => (
            <SingleServices key={sService._id} allService={sService}></SingleServices>
          ))}
        </div>
        
            <button className="my-5">
            <Link to='/services' className="justify-center bg-yellow-700 py-4 px-8 text-white text-center">See All</Link>
            </button>
      </div>
    </div>
  );
};

export default Banner;
