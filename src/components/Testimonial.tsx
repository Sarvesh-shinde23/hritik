import React from 'react';

const Testimonial = () => {
  return (
    <div className="p-4 m-4 bg-gray-100 rounded-lg overflow-hidden md:pt-14 lg:pt-24">
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <blockquote className="mt-4">
            <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900 text-raleway">
              <p>
                “Pest is minimal, distraction-free, and a joy to use.”
              </p>
            </div>
            <footer className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="md:flex-shrink-0">
                  <img
                    alt="Taylor"
                    loading="lazy"
                    className="mx-auto h-10 w-10 rounded-full"
                    src="https://pbs.twimg.com/profile_images/1609760305763975170/Tx2TVkPI_400x400.jpg"
                  />
                </div>
                <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div className="text-base leading-6 font-medium text-gray-900">
                    Taylor Otwell
                  </div>
                  <svg
                    className="hidden md:block mx-1 h-5 w-5 text-purple-600"
                    fill="currentColor"
                    style={{ color: '#ff89ff' }}
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>
                  <div className="text-base leading-6 font-medium text-gray-500">
                    Creator of Laravel
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
