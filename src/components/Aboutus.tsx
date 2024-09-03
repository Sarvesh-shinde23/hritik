import * as React from "react";


const Aboutus = () => {
  

  return (
    <div className="flex overflow-hidden flex-col items-center pt-16 pr-24 pb-28 pl-24 w-full bg-slate-50 min-h-[891px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-col px-3 pb-16 max-w-full text-3xl font-bold text-center text-neutral-800 w-[1320px]">
        <div className="pr-96 pl-96 w-full max-md:px-5 max-md:max-w-full">
          {" "}
          <span className="text-zinc-500">About Us</span>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-[1320px] max-md:max-w-full">
        <div className="flex flex-wrap justify-center w-full max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink justify-center pt-4 basis-0 max-w-[1320px] min-w-[240px] max-md:max-w-full">
            <div className="flex flex-col justify-center px-3 w-full min-h-[609px] max-md:max-w-full">
              <img
                loading="lazy"
                src="/about.jpg.png"
                className="object-contain w-full aspect-[1.04] max-w-[660px] max-md:max-w-full"
              />
            </div>
          </div>
          <div className="flex flex-col flex-1 shrink justify-center pt-4 basis-0 max-w-[1320px] min-w-[240px] max-md:max-w-full">
            <div className="flex flex-col justify-center px-3 py-20 w-full min-h-[609px] max-md:max-w-full">
              <div className="flex flex-col pl-4 w-full max-md:max-w-full">
                <div className="w-full text-2xl font-bold leading-8 text-neutral-800 max-md:max-w-full">
                  Voluptatem dignissimos provident quasi
                  <br />
                  corporis voluptates sit assumenda.
                </div>
                <div className="mt-2 w-full text-base leading-6 text-neutral-700 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                  <br />
                  incididunt ut labore et dolore magna aliqua.
                </div>
                <div className="flex flex-col pt-7 mt-2 w-full max-md:max-w-full">
                  <div className="flex flex-wrap items-start w-full max-md:max-w-full">
                    <div className="flex flex-col items-start pr-4 min-h-[64px] w-[79px]">
                      <div className="flex justify-center items-center px-5 w-16 h-16 bg-white min-h-[64px] rounded-[50px] shadow-[0px_6px_15px_rgba(0,0,0,0.1)]">
                        <div className="flex flex-col self-stretch my-auto w-6">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9647ac6df4be398ce541f9554e5213965b4ec7b0a4910882a49cf9a9fd7e9d13?placeholderIfAbsent=true&apiKey=bc78d96b1bfe4229ab8bdab79a935f37"
                            className="object-contain w-full aspect-square"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col min-w-[240px] w-[520px] max-md:max-w-full">
                      <div className="w-full text-lg font-semibold leading-tight text-neutral-800 max-md:max-w-full">
                        Ullamco laboris nisi ut aliquip consequat
                      </div>
                      <div className="mt-2 w-full text-base text-neutral-700 max-md:max-w-full">
                        Magni facilis facilis repellendus cum excepturi quaerat
                        praesentium libre trade
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-start mt-9 w-full max-md:max-w-full">
                    <div className="flex flex-col items-start pr-4 min-h-[64px] w-[79px]">
                      <div className="flex justify-center items-center px-5 w-16 h-16 bg-white min-h-[64px] rounded-[50px] shadow-[0px_6px_15px_rgba(0,0,0,0.1)]">
                        <div className="flex flex-col self-stretch my-auto w-6">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1e4087c1ba64add81a2c3371fa741bac9919420617a6747571b45329a7c107e?placeholderIfAbsent=true&apiKey=bc78d96b1bfe4229ab8bdab79a935f37"
                            className="object-contain w-full aspect-square"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col min-w-[240px] w-[500px] max-md:max-w-full">
                      <div className="w-full text-lg font-semibold leading-tight text-neutral-800 max-md:max-w-full">
                        Magnam soluta odio exercitationem reprehenderi
                      </div>
                      <div className="mt-2 w-full text-base leading-6 text-neutral-700 max-md:max-w-full">
                        Quo totam dolorum at pariatur aut distinctio dolorum
                        laudantium illo direna
                        <br />
                        pasata redi
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-7 mt-2 w-full text-base leading-6 text-neutral-700 max-md:max-w-full">
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in
                  <br />
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint
                  <br />
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est
                  <br />
                  laborum
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Aboutus