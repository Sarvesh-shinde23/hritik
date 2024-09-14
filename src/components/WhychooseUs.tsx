import React from 'react';
import FeatureCard from './FeaturedCard';
import SectionTitle from './SectionTitle';
import Image from 'next/image';

interface Feature {
  Imagesrc: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    Imagesrc: "/whychooseus/Background.png",
    title: 'Experienced Advisors',
    description: 'Our team consists of industry veterans and subject matter experts with decades of experience in startup consultancy. We bring unparalleled expertise and insights to every project.'
  },
  {
    Imagesrc: "/whychooseus/text.png",
    title: 'Proven Methodologies Winning',
    description: 'We leverage proven methodologies such as Lean Startup, Agile Development, and SWOT Analysis to deliver practical and effective solutions that drive growth and success.'
  },
  {
    Imagesrc: "/whychooseus/1.svg",
    title: 'Global Perspective',
    description: 'With a global network and a deep understanding of various markets, we provide a global perspective that helps startups navigate international challenges and opportunities.'
  },
  {
    Imagesrc: "/whychooseus/2.svg",
    title: 'Tailored Solutions',
    description: 'We believe that every startup is unique. Our solutions are customized to meet the specific needs and goals of each client, ensuring maximum impact and relevance.'
  },
  {
    Imagesrc: "/whychooseus/3.svg",
    title: 'Comprehensive Support',
    description: 'From inception to expansion, we offer end-to-end support that covers all aspects of the startup journey. Our holistic approach ensures that you have the guidance and resources you need at every stage.'
  },
  
];

const WhyChooseUsSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-12 pb-24 w-full max-w-[1490px] min-h-[900px] max-md:pb-25 max-md:max-w-full">
      <SectionTitle
        subtitle="Why Choose Us"
        title={<>We Are Here to Grow Your <br /> Business Exponentially</>}
      />
      <div className="flex flex-wrap justify-center items-start w-full">
        <div className="flex flex-col flex-1 shrink justify-center text-base basis-12 h-[500px] max-w-[1344px] min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-w-[1344px] min-h-[418px] max-md:max-w-full">
            <div className="flex flex-col justify-center w-full max-md:max-w-full">
              {features.slice(0, 3).map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 shrink justify-center px-6 pt-12 basis-0 max-w-[1344px] min-h-[418px] min-w-[240px] max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col w-full">
          <Image
  loading="lazy"
  src="/whychooseus/feature.png" // Ensure this is the correct file format and path
  alt="Business growth illustration"
  className="object-contain w-full rounded-sm aspect-[1.08]"
  width={600} // Add width for better optimization (optional)
  height={500} // Add height for better optimization (optional)
/>

          </div>
        </div>
        <div className="flex flex-col flex-1 shrink justify-center text-base basis-12 h-[418px] max-w-[1344px] min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-w-[1344px] min-h-[400px] max-md:max-w-full">
            <div className="flex flex-col justify-center w-full max-md:max-w-full">
              {features.slice(3).map((feature, index) => (
                <FeatureCard key={index + 3} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;