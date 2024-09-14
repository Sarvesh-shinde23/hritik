import React from 'react';


interface FeatureCardProps {
  Imgsrc: string;  // URL of the image
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ Imgsrc, title, description }) => {
  return (
    <div className="flex flex-col justify-center w-full max-w-md max-md:max-w-full">
      <div className="flex flex-col px-6 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex justify-center items-center px-6 font-black leading-none text-white whitespace-nowrap rounded-sm  h-[60px] min-h-[60px] w-[160px] max-md:px-5">
          <img src={Imgsrc} alt={title} className=" flex-wrap h-full w-full object-cover rounded-sm" />
        </div>
        <div className="mt-4 text-2xl font-bold leading-tight text-sky-950">{title}</div>
        <div className="mt-2 leading-6 text-zinc-500">{description}</div>
      </div>
    </div>
  );
};

export default FeatureCard;
