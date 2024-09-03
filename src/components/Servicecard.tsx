
import React from "react";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col flex-1 shrink justify-center pt-6 basis-0 max-w-[1320px] min-w-[240px]">
      <div className="flex px-3 w-full min-h-[251px]">
        <div className="flex flex-col px-8 py-12 bg-white min-w-[240px] shadow-[0px_0px_25px_rgba(0,0,0,0.1)] w-[314px] max-md:px-5">
          <div className="flex flex-col items-start pt-2 pb-2.5 w-full">
            <div className="flex items-start w-9">
              <img
                loading="lazy"
                src={icon}
                alt=""
                className="object-contain w-9 aspect-square"
              />
            </div>
          </div>
          <h3 className="mt-2.5 w-full text-xl font-bold leading-tight text-neutral-800">
            {title}
          </h3>
          <p className="pt-1.5 mt-2.5 w-full text-sm leading-6 text-neutral-700">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
