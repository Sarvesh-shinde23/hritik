import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col justify-center pt-12 w-full max-w-md min-h-[209px] max-md:max-w-full">
      <div className="flex flex-col px-6 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex justify-center items-center px-6 font-black leading-none text-white whitespace-nowrap rounded-sm bg-zinc-500 h-[60px] min-h-[60px] w-[60px] max-md:px-5">
          <div className="self-stretch my-auto">{icon}</div>
        </div>
        <div className="mt-4 text-2xl font-bold leading-tight text-sky-950">{title}</div>
        <div className="mt-2 leading-6 text-zinc-500">{description}</div>
      </div>
    </div>
  );
};

export default FeatureCard;