import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white w-full flex flex-between ">
      <div className="wrapper flex items-center justify-between">
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={128}
          height={56}
        />

        <div>BUHREC from Babcock University. Copyright 2024.</div>
      </div>
    </footer>
  );
};

export default Footer;
