import Aboutus from '@/components/Aboutus'
import HeroSection from '@/components/HeroSection'
import Services from '@/components/Services'
import TeamSection from '@/components/TeamSection'
import Testimonials from '@/components/Testimonial'
import WhyChooseUsSection from '@/components/WhychooseUs'
import React from 'react'

const page = () => {
  return (<>
   
    <HeroSection/>
    <Services/>
    <Aboutus/>
    
  
    <TeamSection/>
    <WhyChooseUsSection/>
  </>
  )
}

export default page