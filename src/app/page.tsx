import Aboutus from '@/components/Aboutus'
import ContactSection from '@/components/ContactSection'
import FAQ from '@/components/FAQ'
import HeroSection from '@/components/HeroSection'
import MyComponent from '@/components/MyComponent'
import ServiceSection from '@/components/ServiceSection'

import TeamSection from '@/components/TeamSection'
import Testimonials from '@/components/Testimonial'

import WhyChooseUsSection from '@/components/WhychooseUs'
import React from 'react'

const page = () => {
  return (<>
 
    <HeroSection/>
<MyComponent/>
    <Aboutus/>
  <TeamSection/>
    <WhyChooseUsSection/>
  <Testimonials/>  
  <ServiceSection/>
  <FAQ/>
  <ContactSection/>
  </>
  )
}

export default page