import React from 'react';
import FeatureCard from './FeaturedCard';
import SectionTitle from './SectionTitle';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: '',
    title: 'Experienced Advisors',
    description: 'Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor'
  },
  {
    icon: '',
    title: 'Proven Methodologies Winning',
    description: 'Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor'
  },
  {
    icon: '',
    title: 'Global Perspective',
    description: 'Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor'
  },
  {
    icon: '',
    title: 'Tailored Solutions',
    description: 'Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor'
  },
  {
    icon: '',
    title: 'Comprehensive Support',
    description: 'Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor'
  },
  {
    icon: '',
    title: 'Proven a Winning',
    description: 'Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor'
  }
];

const WhyChooseUsSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-12 pb-25 w-full max-w-[1490px] min-h-[900px] max-md:pb-25 max-md:max-w-full">
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
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9fefbe84f1c36a17fd484aad38f2b536131d3e76b76acb3423535b560b58c490?placeholderIfAbsent=true&apiKey=bc78d96b1bfe4229ab8bdab79a935f37" className="object-contain w-full rounded-sm aspect-[1.08]" alt="Business growth illustration" />
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