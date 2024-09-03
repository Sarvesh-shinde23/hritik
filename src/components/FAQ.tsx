/**
 * This code was generated by Builder.io.
 */
import React from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  return (
    <div className="flex overflow-hidden relative flex-col py-5 pr-5 pl-5 mt-4 w-full bg-white rounded-md border border-solid border-neutral-700 border-opacity-10 max-md:pr-5 max-md:max-w-full">
      <h3 className="flex-1 shrink self-stretch w-full text-lg font-semibold leading-none text-neutral-800 max-md:max-w-full">
        {question}
      </h3>
      <p className="flex z-0 flex-col justify-center pt-2.5 w-full text-base leading-6 text-white max-md:max-w-full">
        {answer}
      </p>
      <div className="flex absolute top-5 z-0 flex-col w-4 left-[1039px] right-[21px]">
        <div className="flex items-start w-full">
          <img
            loading="lazy"
            src="http://b.io/ext_?"
            alt=""
            className="object-contain w-4 aspect-square"
          />
        </div>
      </div>
    </div>
  );
};

const faqData = [
  {
    question: "Non consectetur a erat nam at lectus urna duis?",
    answer:
      "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
  },
  {
    question: "Feugiat scelerisque varius morbi enim nunc faucibus?",
    answer:
      "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
  },
  {
    question: "Dolor sit amet consectetur adipiscing elit pellentesque?",
    answer:
      "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
  },
  {
    question: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
    answer:
      "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
  },
  {
    question: "Tempus quam pellentesque nec nam aliquam sem et tortor?",
    answer:
      "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
  },
  {
    question: "Perspiciatis quod quo quos nulla quo illum ullam?",
    answer:
      "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
  },
];

const FAQ: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col items-center py-16 pr-24 pl-24 w-full bg-slate-50 min-h-[807px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col px-3 pb-16 w-full font-bold text-center max-w-[1320px] max-md:max-w-full">
        <div className="self-center px-5 py-2 text-sm tracking-wider leading-tight uppercase whitespace-nowrap bg-blue-600 bg-opacity-10 rounded-[50px] text-zinc-500">
          F.A.Q
        </div>
        <h2 className="pr-96 pl-96 mt-2.5 w-full text-3xl text-neutral-800 max-md:px-5 max-md:max-w-full">
          Frequently Asked <span className="text-zinc-500">Questions</span>
        </h2>
      </div>
      <div className="flex flex-col w-full max-w-[1320px] max-md:max-w-full">
        <div className="flex flex-wrap justify-center px-28 w-full max-md:px-5 max-md:max-w-full">
          {faqData.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
