


import * as React from "react";
import ServiceProp from "./ServiceProp";

const serviceData = [
  {
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f35bdee96c5b7d4bd6629c5db686d4bd72517bc4ce3e0f91ba458bd52feb5f2?placeholderIfAbsent=true&apiKey=bc78d96b1bfe4229ab8bdab79a935f37",
    imgAlt: "Service 1 Icon",
    title: "Nesciunt Mete",
    description: "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
  },
  {
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d6f6424baee25c0bc3cfff883a7fd201cf04041e3686ef009acb84b9a94afd25?placeholderIfAbsent=true&apiKey=bc78d96b1bfe4229ab8bdab79a935f37",
    imgAlt: "Service 2 Icon",
    title: "Eosle Commodi",
    description: "Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.",
  },
  {
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e3ce24c2b0923503df32514ef832e11fb1d5f30918ad3d7bb5cab0e7a7617562?placeholderIfAbsent=true&apiKey=bc78d96b1bfe4229ab8bdab79a935f37",
    imgAlt: "Service 3 Icon",
    title: "Ledo Markt",
    description: "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.",
  },
  {
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0098c25397a829ee8226d41b433769857dfd65b6ddf175de9e8c1760bf1d2c65?placeholderIfAbsent=true&apiKey=bc78d96b1bfe4229ab8bdab79a935f37",
    imgAlt: "Service 4 Icon",
    title: "Asperiores Commodit",
    description: "Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.",
  },
  {
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/bda63f0d4b5bc1fe9d5ae4ef3338e97eb99351a08940b1676872c0afcd51f944?placeholderIfAbsent=true&apiKey=bc78d96b1bfe4229ab8bdab79a935f37",
    imgAlt: "Service 5 Icon",
    title: "Velit Doloremque",
    description: "Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.",
  },
  {
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/778d025b3646ff37bde278603fa5b1e861108e35a303687f74ab472b1a6286a0?placeholderIfAbsent=true&apiKey=bc78d96b1bfe4229ab8bdab79a935f37",
    imgAlt: "Service 6 Icon",
    title: "Dolori Architecto",
    description: "Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.",
  },
];

const ServiceSection: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col items-center py-16 pr-24 pl-24 bg-white max-md:px-5">
      <div className="flex flex-col px-3 pb-16 w-full font-bold text-center max-w-[1320px] max-md:max-w-full">
        <div className="self-center px-5 py-2 text-sm tracking-wider leading-tight uppercase whitespace-nowrap bg-blue-600 bg-opacity-10 rounded-[50px] text-zinc-500">
          Services
        </div>
        <div className="mt-2.5 w-full text-3xl pl-[484px] pr-[485px] text-neutral-800 max-md:px-5 max-md:max-w-full">
          Our <span className="text-zinc-500">Services</span>
        </div>
      </div>
      <div className="flex flex-col max-w-full w-[1320px]">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              {serviceData.slice(0, 3).map((service, index) => (
                <ServiceProp
                  key={index}
                  imgSrc={service.imgSrc}
                  imgAlt={service.imgAlt}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {serviceData.slice(3).map((service, index) => (
              <ServiceProp
                key={index}
                imgSrc={service.imgSrc}
                imgAlt={service.imgAlt}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;