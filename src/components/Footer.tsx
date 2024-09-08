import React from "react";

const Footer: React.FC = () => {
  const commonImgSrc = "https://cdn.builder.io/api/v1/image/assets/TEMP/2cc9195bef0a81ca81f45fe0e244de92bb8bc6ffffa3bb57fe297d92a1aec7a8?placeholderIfAbsent=true&apiKey=bc78d96b1bfe4229ab8bdab79a935f37";
  
  return (
    <div className="flex flex-col items-center pb-5 w-full bg-white min-h-[300px]">
      <div className="flex flex-col pt-7 max-w-full w-[1320px]">
        <div className="flex flex-wrap justify-center w-full max-md:max-w-full">
          <div className="flex flex-col grow shrink justify-center pt-6 max-w-[1320px] min-w-[240px] w-[396px] max-md:max-w-full">
            <div className="flex flex-col px-3 w-full max-w-[1320px] min-h-[180px] max-md:max-w-full">
              <div className="flex items-center w-full text-2xl font-semibold whitespace-nowrap text-neutral-800">
                {/* Add a valid image source or remove this */}
                <div className="self-stretch my-auto">{/* image */}</div>
              </div>
              <div className="flex flex-col pt-4 w-full text-sm text-neutral-700">
                <p className="w-full">A108 Adam Street</p>
                <p className="mt-1.5 w-full">New York, NY 535022</p>
                <p className="pt-3 mt-1.5 w-full font-bold">
                  Phone: <span className=""> +1 5589 55488 55</span>
                </p>
                <p className="mt-1.5 w-full font-bold">
                  Email: <span className=""> info@example.com</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col grow shrink justify-center pt-6 pb-8 w-44 max-w-[1320px]">
            <div className="flex flex-col px-3 w-full h-[165px] max-w-[1320px]">
              <h3 className="pb-3 w-full text-base font-bold leading-tight text-neutral-800">
                Useful Links
              </h3>
              <div className="flex flex-col mt-2 w-full">
                {["Home", "About us", "Services", "Terms of service"].map((link, index) => (
                  <div className="flex items-center py-2.5 w-full" key={index}>
                    <div className="flex flex-col items-start self-stretch pr-1 my-auto w-[15px]">
                      <div className="flex items-start w-3">
                        <img
                          loading="lazy"
                          src="/companylogo1.png"
                          alt={`${link} icon`}
                          className="object-contain w-3 aspect-square"
                        />
                      </div>
                    </div>
                    <p className="self-stretch my-auto text-sm leading-none text-neutral-700 text-opacity-80">
                      {link}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col grow shrink justify-center pt-6 pb-8 w-44 max-w-[1320px]">
            <div className="flex flex-col px-3 w-full h-[165px] max-w-[1320px]">
              <h3 className="pb-3 w-full text-base font-bold leading-tight text-neutral-800">
                Our Services
              </h3>
              <div className="flex flex-col mt-2 w-full">
                {["Web Design", "Web Development", "Product Management", "Marketing"].map((service, index) => (
                  <div className="flex items-center py-2.5 w-full" key={index}>
                    <div className="flex flex-col items-start self-stretch pr-1 my-auto w-[15px]">
                      <div className="flex items-start w-3">
                        <img
                          loading="lazy"
                          src={commonImgSrc}  // Change this if you have different images
                          alt={`${service} icon`}
                          className="object-contain w-3 aspect-square"
                        />
                      </div>
                    </div>
                    <p className="self-stretch my-auto text-sm leading-none text-neutral-700 text-opacity-80">
                      {service}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col grow shrink justify-center pt-6 max-w-[1320px] min-w-[240px] w-[396px] max-md:max-w-full">
            <div className="flex flex-col px-3 pb-14 w-full max-w-[1320px] max-md:max-w-full">
              <h3 className="pb-3 text-base font-bold leading-tight text-neutral-800">
                Follow us
              </h3>
              <p className="mt-2 text-sm leading-5 text-neutral-700">
                Cras fermentum odio eu feugiat lide par naso tierra videa magna
                <br /> derita valies
              </p>
              <div className="flex items-start mt-4">
                {[
                  "228f7dcbd54c42693eedeedcbed69381fb9adf5de176d8c2d4e17df080270cb3",
                  "d65ce2a0f2c5633c2e519af2efcc1ea64c6190574ed27e8ba544549545c8637f",
                  "519efcdcf52f0e1e91f6847153f8b8201cee4c1a03e9d08356bd573bc8b81554",
                  "0d531149930f3c30f7389e9fed57808dba8f783483ac4dbae07fdb6dee97830d",
                ].map((imgSrc, index) => (
                  <div className="flex flex-col items-start pr-2.5 min-h-[40px] w-[50px]" key={index}>
                    <div className="flex justify-center items-center px-3 py-2 w-10 rounded border border-solid border-neutral-700 border-opacity-50 min-h-[40px]">
                      <div className="flex flex-col justify-center self-stretch py-1 my-auto w-4">
                        <div className="flex items-start w-full">
                          <img
                            loading="lazy"
                            src={`https://cdn.builder.io/api/v1/image/assets/TEMP/${imgSrc}?placeholderIfAbsent=true&apiKey=bc78d96b1bfe4229ab8bdab79a935f37`}
                            alt={`Social media icon ${index + 1}`}
                            className="object-contain w-4 aspect-square"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
