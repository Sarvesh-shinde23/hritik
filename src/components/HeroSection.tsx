import React from 'react';

const HeroSection = () => {
  return (
    <div
      className="hero min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url(hero-bg.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60 bg-black"></div>
      <div className="hero-content flex flex-col justify-center items-start text-neutral-content text-left w-full lg:w-1/2 lg:order-1" data-aos="zoom-out"> 
        <div className="max-w-md">
          <h1 className=" blue-600 mb-5 text-5xl font-bold ">"Transforming Startups into Successful Enterprises"</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
