import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { AuthContext } from "../UserContext/UserContext";
import Swal from "sweetalert2";
import SpecificsReviews from "../SpecificsReviews/SpecificsReviews";

const DetailsMore = () => {
  const details = useLoaderData();
  const { _id, img, serviceName, descriptios, Chamber, seviceIcon, fees } = details;
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] =useState([])

  useEffect(()=>{
    fetch('http://localhost:5001/allReviews')
    .then(res => res.json())
    .then(data => setReviews(data))
  },[])

  const specificService = reviews.find(review => review.serviceName === details.serviceName)
console.log(specificService)



  // handleForReview
  const handleForReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const Name = form.Name.value;
    const email = form.email.value;
    const PhotoUrl = form.PhotoUrl.value;
    const Ratings = form.Ratings.value;
    const Message = form.Message.value;
    // console.log( Name, email, PhotoUrl, Ratings, Message)

    const reviewDetails = {
      Name,
      email,
      PhotoUrl,
      Ratings,
      Message,
      serviceName,
    };

    fetch("http://localhost:5001/allReviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
          e.target.reset()
        }else{

        }
        console.log(data);
       
      });
  };

  return (
    <div className="">
      <section className="p-4 lg:p-8  bg-gray-100 text-gray-800 ">
        <div className=" container mx-auto space-y-12">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
              <span className="text-xs uppercase text-gray-600">Help for {serviceName}</span>
              <h3 className="text-6xl font-bold">{serviceName}</h3>
              <p className="my-6 text-gray-600">{descriptios}</p>
              <p className="text-red-700 text-lg font-bold">Chamber: {Chamber}</p>
              <p className="text-red-700 text-lg font-bold">Fees: {fees} Tk only</p>
              <button type="button" className="self-start my-2 bg-yellow-800 py-3 px-4 rounded text-white">
                Send a message
              </button>
            </div>
            <div className="w-1/2">
              <PhotoProvider className="w-full relative">
                <PhotoView src={img} className="w-full absolute">
                  <img src={img} className="w-full h-full" alt="" />
                </PhotoView>
              </PhotoProvider>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="reviewSection my-5 mx-[10%]">
          <div className="reviews flex justify-between">
            <h1 className="bg-yellow-800 p-3 border rounded text-white">Users Review</h1>
            {/* The button to open modal */}
            <label htmlFor="my-modal-3" className="btn">
              Add A Review
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">
                  ✕
                </label>
                <form onSubmit={handleForReview} className="bg-gray-200 block p-5">
                  <div className="space-y-1 my-4">
                    <label for="username" className="block text-gray-600">
                      Name
                    </label>
                    <input
                      type="text"
                      name="Name"
                      id="name"
                      defaultValue={user?.displayName}
                      placeholder="Name"
                      className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-pink-600"
                    />
                  </div>
                  <div className="space-y-1 my-4">
                    <label for="username" className="block text-gray-600">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="name"
                      defaultValue={user?.email}
                      placeholder="email"
                      className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-pink-600"
                    />
                  </div>
                  <div className="space-y-1 my-4">
                    <label for="PhotoUrl" className="block text-gray-600">
                      Photo URL
                    </label>
                    <input
                      type="text"
                      name="PhotoUrl"
                      id="PhotoUrl"
                      defaultValue={user?.photoURL}
                      placeholder="PhotoUrl"
                      className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-pink-600"
                    />
                  </div>
                  <div className="space-y-1 my-4">
                    <label for="PhotoUrl" className="block text-gray-600">
                      Ratings Point
                    </label>
                    <input
                      type="text"
                      name="Ratings"
                      id="Rating"
                      placeholder="Ratings"
                      className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-pink-600"
                    />
                  </div>
                  <div className="my-4">
                    <label htmlFor="Message">Message</label>
                    <textarea
                      id="Message"
                      name="Message"
                      placeholder="Write your Review "
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-pink-600 border-gray-300 text-gray-900"
                    ></textarea>
                  </div>
                  <div className="rating rating-sm">
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-yellow-800" />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-yellow-800" checked />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-yellow-800" />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-yellow-800" />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-yellow-800" />
                  </div>
                  <div>
                    <button type="submit" className="w-full bg-yellow-800 text-white py-4 px-5 rounded">
                      Submit a Review
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {
            specificService.map(specific => <SpecificsReviews key={specific._id} specific={specific}></SpecificsReviews>)
          }
        </div>
      </section>
    </div>
  );
};

export default DetailsMore;
