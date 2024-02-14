import { aboutText1 } from '@/constants';
import Image from 'next/image';
import React from 'react';

type AboutCardProps = {
  text: string;
  image: string;
};

const AboutCard = ({ text, image }: AboutCardProps) => {
  return (
    <section className="flex justify-between">
      <div className="bg-primary-500 rounded-[20px] flex flex-col justify-around items-center m-5 p-10 gap-5 lg:flex-row">
        <div className="text-primary-50 font-bold p-2 text-[17px] sm:text-[20px] min-w-[200px] max-w-[500px]">
          {text}
        </div>
        <Image
          src={image}
          alt="about-image"
          width={600}
          height={100}
          className="rounded-[20px]"
        />
      </div>
    </section>
  );
};

export default AboutCard;
