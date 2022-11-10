import React from 'react';

const SpecificsReviews = (specific) => { 
    const { Name, email,PhotoUrl,Ratings,Message,serviceName } = specific;
    return (
        <div>
            <div className="container flex flex-col w-full p-6  rounded-md divide-gray-300 bg-gray-50 text-gray-800">
            <div className="flex justify-between  p-4">
              <div className=" space-x-4 flex ">
                <div>
                  <img
                    src="https://source.unsplash.com/100x100/?portrait"
                    alt=""
                    className="object-cover w-12 h-12 rounded-full bg-gray-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Leroy Jenkins</h4>
                </div>
              </div>
              <div className="rating rating-sm">
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm text-gray-600">
              <p>
                Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut
                dolor id justo fringilla finibus.
              </p>
              <p>
                Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas
                gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.
              </p>
            </div>
          </div>
        </div>
    );
};

export default SpecificsReviews;