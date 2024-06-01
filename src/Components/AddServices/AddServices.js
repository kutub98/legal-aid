import React from 'react';
import Swal from 'sweetalert2';

const AddServices = () => {
  const handleForAddService = e => {
    e.preventDefault();
    const form = e.target;
    const img = form.img.value;
    const serviceName = form.serviceName.value;
    const descriptios = form.descriptios.value;
    const Chamber = form.Chamber.value;
    const seviceIcon = form.seviceIcon.value;
    const fees = form.fees.value;
    console.log(img, serviceName, descriptios, Chamber, fees, seviceIcon);

    const addedAService = {
      img,
      serviceName,
      descriptios,
      Chamber,
      seviceIcon,
      fees,
    };

    fetch('https://legal-aid-server.vercel.app/services', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(addedAService),
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Successfully you a added a service',
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
        } else {
        }
        console.log(data);
      });
  };

  return (
    <div className="my-10 px-4">
      <section className="p-6 bg-white text-gray-900 justify-center py-2 px-[8%]">
        <form
          onSubmit={handleForAddService}
          className="container  ng-untouched ng-pristine ng-valid grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 "
        >
          <div>
            <label for="serviceName" className="block mb-2 text-sm">
              Image Url for Image
            </label>
            <input
              type="text"
              name="img"
              id="img"
              required
              placeholder="Image Url for Image"
              className="w-full px-3 py-3 shadow-stone-600 border rounded-md  border-gray-300 bg-gray-50 text-gray-800"
            />
          </div>
          <div>
            <label for="serviceName" className="block mb-2 text-sm">
              Service Name
            </label>
            <input
              type="text"
              name="serviceName"
              id="serviceName"
              required
              placeholder="Service Name"
              className="w-full px-3 py-3 shadow-stone-600 border rounded-md  border-gray-300 bg-gray-50 text-gray-800"
            />
          </div>
          <div>
            <label for="descriptios" className="block mb-2 text-sm">
              Descriptions
            </label>
            <input
              type="text"
              name="descriptios"
              id="descriptios"
              required
              placeholder="Descriptions"
              className="w-full px-3 py-3 shadow-stone-600 border rounded-md  border-gray-300 bg-gray-50 text-gray-800"
            />
          </div>
          <div>
            <label for="Chamber" className="block mb-2 text-sm">
              Chamber
            </label>
            <input
              type="text"
              name="Chamber"
              id="Chamber"
              required
              placeholder="Chamber"
              className="w-full px-3 py-3 shadow-stone-600 border rounded-md  border-gray-300 bg-gray-50 text-gray-800"
            />
          </div>
          <div>
            <label for="seviceIcon" className="block mb-2 text-sm">
              Image url for For serviceIcon
            </label>
            <input
              type="text"
              name="seviceIcon"
              id="seviceIcon"
              required
              placeholder="Image url for For serviceIcon"
              className="w-full px-3 py-3 shadow-stone-600 border rounded-md  border-gray-300 bg-gray-50 text-gray-800"
            />
          </div>
          <div>
            <label for="Fees" className="block mb-2 text-sm">
              Fees
            </label>
            <input
              type="text"
              name="fees"
              id="Fees"
              required
              placeholder="Fees"
              className="w-full px-3 py-3 shadow-stone-600 border rounded-md  border-gray-300 bg-gray-50 text-gray-800"
            />
          </div>
          <button
            type="submit"
            className=" w-full  text-center justify-center bg-yellow-700 py-3 rounded-md text-white font-bold"
          >
            Add a New Service
          </button>
        </form>
      </section>
    </div>
  );
};

export default AddServices;
