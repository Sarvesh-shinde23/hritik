import React from 'react';
import ContactInfo from './ContactInfo';
import SocialIcon from './SocialIcon';

interface ContactDetail {
  src: string;
  text: string;
  alt: string;
}

interface SocialIconDetail {
  src: string;
  alt: string;
}

const contactDetails: ContactDetail[] = [
  {
    src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1ab5932d0723b1093576084d62e914f130c03e959813c161ac16138c88d93c81',
    text: 'contact@example.com',
    alt: 'Email Icon'
  },
  {
    src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3795751cd8f064fc0918a11cc938e0c772a394b199b87d36e2654e46d3c32b96',
    text: '+1 5589 55488 55',
    alt: 'Phone Icon'
  }
];

const socialIcons: SocialIconDetail[] = [
  {
    src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/51d98a7ab46442df1e30644b7858b319aacb35d39a3e9eef73e31cf73260a45f',
    alt: 'Social Icon 1'
  },
  {
    src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8aac0e5cec8233aa52d43a0969c6764908833a12481ad0a0218479544ab9b731',
    alt: 'Social Icon 2'
  },
  {
    src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d48d7145b47d17bd0fba0f53fb6d8668d09c784487a1e67d5804ca1c44427ea6',
    alt: 'Social Icon 3'
  },
  {
    src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1a328719b5f1cbe5a042b77e2e3b009fff8a661e32dacc9329ebd27e8ee8825f',
    alt: 'Social Icon 4'
  }
];

const TopBar: React.FC = () => {
  return (
    <div className="flex justify-center items-center px-24 py-2.5 bg-zinc-500 max-md:px-5">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-between self-stretch px-3 my-auto w-full basis-0 max-w-[1320px] min-w-[240px] max-md:max-w-full">
        <div className="flex items-center h-full min-w-[240px]">
          {contactDetails.map((detail, index) => (
            <ContactInfo key={index} src={detail.src} text={detail.text} alt={detail.alt} />
          ))}
        </div>
        <div className="flex items-center py-1 h-full">
          {socialIcons.map((icon, index) => (
            <SocialIcon key={index} src={icon.src} alt={icon.alt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBar;