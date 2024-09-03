import * as React from "react";
import Card from "./Card";

const cardsData = [
  {
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/438953360af13d473d12d182f1e89eb92c8c5501adb89b7188b39f883c479bcb?placeholderIfAbsent=true&apiKey=bc78d96b1bfe4229ab8bdab79a935f37",
    altText: "Company Registration Icon",
    title: "Company Registration",
    description: "Navigate the legal landscape with ease."
  },
  {
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2e31baa8aa002b01802523c568133f9b45de6b4fdad77dbc13b4049de6acac99?placeholderIfAbsent=true&apiKey=bc78d96b1bfe4229ab8bdab79a935f37",
    altText: "Fundraising Icon",
    title: "Fundraising",
    description: "Secure the capital you need to grow."
  },
  {
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7fad58727f66f7c54be4fb458465555e6bb2f2e6d20f3e36faa2133001102cc2?placeholderIfAbsent=true&apiKey=bc78d96b1bfe4229ab8bdab79a935f37",
    altText: "Growth Strategy Icon",
    title: "Growth Strategy",
    description: "Develop strategies to scale your business."
  },
  {
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b95a34902fa8fae2f6ff9fbd4ffd50730eccf2522f0457beff2bffe6f538f611?placeholderIfAbsent=true&apiKey=bc78d96b1bfe4229ab8bdab79a935f37",
    altText: "Efficiency Optimization Icon",
    title: "Efficiency Optimization",
    description: "Maximize your operational efficiency."
  },
  {
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e967612e83be2fd98830d3a1f59c2fc2d3faed40f5f034c81c218b447d23ad2e?placeholderIfAbsent=true&apiKey=bc78d96b1bfe4229ab8bdab79a935f37",
    altText: "End-to-End Support Icon",
    title: "End-to-End Support",
    description: "Providing solutions at every stage of your startup journey."
  }
];

const MyComponent: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col items-center pt-9 pr-24 pb-16 pl-24 bg-white max-md:px-5">
      <div className="flex flex-col w-full max-w-[1320px] max-md:max-w-full">
        <div className="flex flex-wrap justify-center w-full max-md:max-w-full">
          {cardsData.slice(0, 4).map((card, index) => (
            <div key={index} className="flex flex-col flex-1 shrink justify-center pt-6 basis-0 max-w-[1320px] min-w-[240px]">
              <div className="flex pr-1 pl-3 w-full min-h-[251px]">{/* Adjust pl-3 or pr-3 based on position if needed */}
                <Card {...card} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center pt-6 w-full max-w-[1320px] min-h-[275px] max-md:max-w-full">
          <div className="flex justify-center px-3 w-full min-h-[251px] max-md:max-w-full">
            <Card {...cardsData[4]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;