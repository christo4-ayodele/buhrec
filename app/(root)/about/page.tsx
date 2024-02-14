import AboutCard from '@/components/shared/AboutCard';
import { aboutText1, aboutText2, aboutText3, aboutTextHead } from '@/constants';
import React from 'react';

const About = () => {
  return (
    <section className="flex w-full  flex-col items-center bg-primary-50 bg-cover backdrop-brightness-0 py-5 md:py-10 heroImg">
      <div className="text-center top-[150px] font-bold text-[60px]">
        {aboutTextHead}
      </div>
      <AboutCard
        text={aboutText1.subText}
        image={'/assets/images/research-pic1.jpg'}
      />

      <AboutCard
        text={aboutText2.subText}
        image={'/assets/images/research-pic2.jpg'}
      />

      <AboutCard
        text={aboutText3.subText}
        image={'/assets/images/research-pic3.jpg'}
      />
    </section>
  );
};

export default About;
