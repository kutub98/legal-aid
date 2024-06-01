import React, { useEffect, useRef, useState } from 'react';
import img1 from '../../assets/Bg/bg1.jpg';
import img2 from '../../assets/Bg/bg3.jpg';
import img3 from '../../assets/Bg/1 (1).jpg';
import './Banner.css';

import { FaPhoneAlt } from 'react-icons/fa';
import Lottie from 'lottie-web';
import SingleServices from '../SingleServices/SingleServices';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {
  const container = useRef(null);
  const [allServices, setServices] = useState([]);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../law.json'),
      rendererSettings: {
        context: container,
        scaleMode: 'noScale',
        clearCanvas: false,
        progressiveLoad: false,
        hideOnTransparent: true,
      },
    });
  }, []);

  useEffect(() => {
    fetch('https://legal-aid-server.vercel.app/services')
      .then(res => res.json())
      .then(data => {
        const sortedData = data.sort((a, b) => b - a);
        setServices(sortedData);
      });
  }, []);

  const dataLoad = () => {
    if (allServices.length === 0) {
      return (
        <div className=" flex py-2 px-2 items-center w-1/3 text-white m-auto bg-yellow-600 justify-center ">
          <div className="w-5 h-5 justify-center text-center items-center border-gray-400 opacity-60 rounded-full ml-5 p-1 bg-black relative">
            <svg
              className=" absolute top-0 left-0 animate-spin h-5 w-5 border rounded-full border-white"
              viewBox="0 0 24 24"
            ></svg>
          </div>
          Services Data is loading
        </div>
      );
    }
    return (
      <div className="">
        <div className="servicesAtHome grid lg:grid-cols-3 grid-cols-1 gap-6">
          {allServices.slice(0, 3).map(sService => (
            <SingleServices key={sService._id} allService={sService} />
          ))}
        </div>
        <div className="w-1/2 m-auto bg-slate-200 relative my-6">
          <Link
            to="/services"
            className="justify-center w-fit bg-yellow-700 px-4 py-2 text-lg text-white text-center rounded absolute"
          >
            See All
          </Link>
        </div>
      </div>
    );
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className=" overflow-hidden w-full max-w-[1380px] mx-auto">
      <Slider {...sliderSettings} className="px-5">
        <div className="carousel-item relative w-full lg:h-[500px] h-[200px] md:h-[390px]">
          <img src={img1} alt="/" className="w-full h-[100%] absolute" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5  top-1/2">
            <div className="w-2/3 pl-20 sliderText">
              <h3 className="text-white mt-2">আপনার কি আইনি সহায়তা প্রয়োজন?</h3>
              <h1 className="text-white mt-2">আমরা অধিকারের জন্য লড়াই করি</h1>
              <p className="text-white mt-2">
                আমরা কঠোর পরিশ্রমী । আমরা সকলের তরে দাড়াই যাতে সবাই সুন্দর জীবন
                ও জীবিকা নির্বাহ করতে পারে এবং অর্থনীতিতে সমানভাবে অংশগ্রহণ করতে
                পারে।
              </p>
              <button className="bg-white py-3 px-4 rounded-lg mt-2">
                আরো জানতে....
              </button>
            </div>
          </div>
        </div>
        <div className="carousel-item relative w-full lg:h-[500px] h-[200px] md:h-[390px]">
          <img src={img2} alt="/" className="w-full h-[100%] absolute" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5  top-1/2">
            <div className="w-2/3 pl-20 sliderText">
              <h3 className="text-white mt-2">আপনার কি আইনি সহায়তা প্রয়োজন?</h3>
              <h1 className="text-white mt-2">আমরা অধিকারের জন্য লড়াই করি</h1>
              <p className="text-white mt-2">
                আমরা কঠোর পরিশ্রমী । আমরা সকলের তরে দাড়াই যাতে সবাই সুন্দর জীবন
                ও জীবিকা নির্বাহ করতে পারে এবং অর্থনীতিতে সমানভাবে অংশগ্রহণ করতে
                পারে।
              </p>
              <button className="bg-white py-3 px-4 rounded-lg mt-2">
                আরো জানতে....
              </button>
            </div>
          </div>
        </div>
        <div className="carousel-item relative w-full lg:h-[500px] h-[200px] md:h-[390px]">
          <img src={img3} alt="/" className="w-full h-[100%] absolute" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5  top-1/2">
            <div className="w-2/3 pl-20 sliderText">
              <h3 className="text-white mt-2">আপনার কি আইনি সহায়তা প্রয়োজন?</h3>
              <h1 className="text-white mt-2">আমরা অধিকারের জন্য লড়াই করি</h1>
              <p className="text-white mt-2">
                আমরা কঠোর পরিশ্রমী । আমরা সকলের তরে দাড়াই যাতে সবাই সুন্দর জীবন
                ও জীবিকা নির্বাহ করতে পারে এবং অর্থনীতিতে সমানভাবে অংশগ্রহণ করতে
                পারে।
              </p>
              <button className="bg-white py-3 px-4 rounded-lg mt-2">
                আরো জানতে....
              </button>
            </div>
          </div>
        </div>
        <div className="carousel-item relative w-full lg:h-[500px] h-[200px] md:h-[390px]">
          <img src={img1} alt="/" className="w-full h-[100%] absolute" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5  top-1/2">
            <div className="w-2/3 pl-20 sliderText">
              <h3 className="text-white mt-2">আপনার কি আইনি সহায়তা প্রয়োজন?</h3>
              <h1 className="text-white mt-2">আমরা অধিকারের জন্য লড়াই করি</h1>
              <p className="text-white mt-2">
                আমরা কঠোর পরিশ্রমী । আমরা সকলের তরে দাড়াই যাতে সবাই সুন্দর জীবন
                ও জীবিকা নির্বাহ করতে পারে এবং অর্থনীতিতে সমানভাবে অংশগ্রহণ করতে
                পারে।
              </p>
              <button className="bg-white py-3 px-4 rounded-lg mt-2">
                আরো জানতে....
              </button>
            </div>
          </div>
        </div>
      </Slider>

      <div className="aboutUs grid gap-8 grid-cols-1 lg:grid-cols-2 my-10">
        <div class="">
          <h4 class="my-3 lg:text-3xl mb-4 font-bold text-yellow-600">
            বাংলাদেশের আইন সংস্থা সম্পর্কে
          </h4>
          <h3 class="my-3">আমরাই লিগ্যাল কোম্পানি পরিচালনা করি</h3>
          <p class="mb-4 text-justify">
            আপনি কি আইনি সহায়তা খুঁজছেন? অথবা চাইছেন আইনি পরামর্শ? আপনার আইনি
            জিজ্ঞাসার উত্তর দিতেই আপনি কি আইনি সহায়তা খুঁজছেন? অথবা চাইছেন আইনি
            পরামর্শ? আপনার আইনি জিজ্ঞাসার উত্তর দিতেই আমাদের এই প্রচেষ্টা। আপনার
            পাচ্ছেন বিনামূল্যে আইন সহায়তা। প্রশ্ন করতে পারেন আইন ও আইনের সঙ্গের
            সংশ্লিষ্ট বিষয় নিয়ে। আপনাদের সেবা দিতে আমরা সর্বাত্মক প্রচেষ্টা
            করবো। আমাদের আই বিনামূল্যের আইন সহায়তায় থাকছে, সাধারণ আইনি বিষয়ে
            জিজ্ঞাসা ও উত্তর, আইনের সাধারণ আলোচনা, কোন বিষয়ে প্রাথমিক আইন
            পরামর্শ ইত্যাদি। আমাদের এই সেবাটি একটি স্বেচ্ছাশ্রম ভিত্তিক সেবা যা
            আমদের আমাদের প্যানেল আইনজীবী ও এডভোকেটরা অবসর সময় প্রদান করে থাকেন।
            এই সেবায় আপনার জটিল বিষয়ে, বিশেষ আইনি বিষয়ে, দলিল, জাগয়া-জমিন ও
            কৌশলগত বিষয়ে বিষয়ে পরামর্শ দেওয়া হয় না কারণ তা বাস্তবভিত্তিক ভাবে
            সম্ভব নয়। তাছাড়া আপনি যদি ইতোমধ্যে কোন বিজ্ঞ আইনজীবীর কাছ থেকে সেবা
            নিয়ে থাকেন তবে সে ক্ষেত্রেও আমাদের এই সেবা আপনার জন্য প্রযোজ্য নয়।
          </p>
          <h5 class="px-2 py-2 bg-yellow-700 w-2/3 shadow-2xl text-white font-semibold">
            যেকোন সহায়তা পেতে কল করুন
          </h5>

          <div class="justCall">
            <i class="fa-sharp fa-solid fa-phone icon"></i>
            <p className="flex items-center my-2">
              {' '}
              <FaPhoneAlt /> +88018XXXXXXXXXXXX অথবা +88018XXXXXXXXXXXX
            </p>
          </div>
        </div>

        <div class="aboutImgRightSide">
          <div className="LottieFiles w-full" ref={container}></div>
        </div>
      </div>

      <div className="serviceBox justify-center block bg-yellow-50">
        <h1 className="text-center text-3xl font-bold my-5 bg-yellow-600 text-white px-2 py-2 w-1/3 m-auto rounded">
          Our Service
        </h1>

        <div className="">{dataLoad()}</div>
      </div>
    </div>
  );
};

export default Banner;
